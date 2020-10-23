import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const AdminAdd = () => {
    const history=useHistory();

    
    return (
        
            
                
                <form action="https://secure-shelf-36035.herokuapp.com/addadmin" method="post">
                <h1>Add Event</h1>
                    <input type="text" class="form-control" placeholder="input Name" name="eventName"></input>
                    <br/>
                    <input type="text" placeholder="input des" class="form-control" name="description"></input>
                    <br/>
                    <input type="date" placeholder="input date" class="form-control" name="startDate"></input>
<br/>
                  <input  type="submit"></input> 

                </form>
            
        
    );
};

export default AdminAdd;