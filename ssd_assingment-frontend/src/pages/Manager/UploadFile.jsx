import React, { Component } from "react";
import axios from 'axios'
import swal from 'sweetalert';

class UploadFile extends Component {
  state = {
   
  };

  componentDidMount() {
   
  }

  async submitFileData(event){
    event.preventDefault();
    const data = new FormData();
    const imagedata = event.target.uploadFile.files[0];
    data.append('file', imagedata);
    console.log(imagedata);
    const responseData = await axios.post(`http://localhost:5000/file/upload`, data, {
      headers: {
        'Content-Type':'multipart/form-data'
      }
    });
    console.log(responseData);
    if(responseData.status == 200){
      swal("Good job!", "File Uploaded Successfully!", "success");
    }

  }


  render() {
    return (
      <React.Fragment>
        <div className="row" style={{marginLeft:"500px",marginTop:"100px"}}>
          <form onSubmit={this.submitFileData}>
            <h1>Upload File</h1>
            <input type="file" name="uploadFile"/><br />
            <button type="submit" style={{marginTop:"20px"}} >Upload</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
};

export default UploadFile;
