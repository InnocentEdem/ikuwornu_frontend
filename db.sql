create table quizmasters(
    id serial primary key,
    fname varchar(100) not null,
    lname varchar(100) not null,
    password varchar(100)not null,
    isAdmin boolean
);

create table questions(
    id serial primary key,
    question varchar(500),
    answer varchar(200),
    quizmaster_id int references quizmasters(id)

);

create table quiz_sessions(
    session_id serial primary key,
    date_created date,
    quizmaster_id int references quizmasters(id)
);
create table contestants(
    id serial primary key,
    fname varchar(100),
    lname varchar(100),
    quiz_session_id int references quiz_sessions(session_id)
);

