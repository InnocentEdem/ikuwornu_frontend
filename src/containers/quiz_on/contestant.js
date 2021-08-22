class  Candidate {

    constructor(name) {
       
       this.name=name;
       this.score=0;
       this.focus=0
    }
    incrementScore(value){
        this.score += value;
    }
    getScore(){
        return this.score
    }

   
}
 
export default Candidate ;