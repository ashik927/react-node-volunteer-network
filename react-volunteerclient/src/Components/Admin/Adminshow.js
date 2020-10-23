import { Link } from '@material-ui/icons';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Adminshow = (props) => {
    const history = useHistory();
    const deleteItem=(id)=>{
        fetch('https://secure-shelf-36035.herokuapp.com/admindeleteitem/'+id,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(result=>console.log("success"))
        history.push('/admin')
    }
    return (
        
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Email Id</th>
      <th>registration Date</th>
      <th>Volunteer List</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
        
      <td>{props.show.name}</td>
      <td>{props.show.email}</td>
      <td>{props.show.startDate}</td>
      <td>{props.show.eventName}</td>
      <td>  <Button onClick={()=>deleteItem( props.show.id)} variant="primary">Delete</Button></td>
    </tr>
   
  </tbody>
</Table>
        
    );
};

export default Adminshow;