
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
class FileLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const maxSize = 5242880;
        return (
          <div className="text-center mt-5">
            <Dropzone
              onDrop={this.onDrop}
              accept="file/xls,file/xlsx"
              minSize={0}
              maxSize={maxSize}
            >
              {({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
                
                return (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {!isDragActive && ' '}
                    {isDragActive && !isDragReject && "Drop to load!"}
                    {isDragReject && "File type rejected."}
                    
                  </div>
                )}
              }
            </Dropzone>
          </div>
        );
    }
}
export default FileLoad;