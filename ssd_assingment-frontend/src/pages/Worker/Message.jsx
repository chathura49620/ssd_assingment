import React, { Component } from "react";
import axios from "axios";
import { AddAssignmentModal } from "../../components/Worker/Modals/AddAssignmentModal";
import { EditAssignmentModal } from "../../components/Worker/Modals/EditAssignmentModal";
import { AssignmentTable } from "../../components/Worker/Tables/AssignmentTable";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { computeStyles } from "@popperjs/core";

class Message extends Component {
  state = {
    Assignment: [],
    addModalShow: false,
    editModelShow: false,
    empass:{}, 
    id: ""
  };

  componentDidMount()  {

    axios
      .get("http://localhost:5000/api/assignment-details")
      .then((result) => {
        const Assignment = result.data;
        console.log(Assignment);

        this.setState({ Assignment: Assignment });
      })
      .catch((err) => console.log(err.message));
  }

setNewDetails = (assignment) => {
  
  
  this.setState({addModalShow: true, empass: assignment});


}

setEditPopup = (assignment) => {

  console.log(assignment);
  this.setState({editModelShow: true, empass: assignment});

}

handleAssignmentDelete = (assignment) => {
  // console.log("Delete");
  const Assignment = this.state.Assignment.filter(l => l._id !== assignment._id );
  this.setState({Assignment:Assignment});


}



  render(){
   
  return (
    <React.Fragment>
        <div style={{marginLeft:"500px",marginTop:"100px"}}>
          <h1 className="mb-5">Save Message</h1>
          <form action="/">
            <p><label for="w3review">Message:</label></p>
            <textarea id="w3review" name="w3review" rows="4" cols="50" style={{border:"1px solid black"}}></textarea>
            <br />
            <input type="submit" value="Submit" style={{marginTop:"40px"}}/>
          </form>
        </div>
        
        
      </React.Fragment>
  );
  }
};

export default Message;