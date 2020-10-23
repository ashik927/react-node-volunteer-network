
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './Single.css'
import { userContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Header from '../Header/Header';

const SigleItem = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const [selectedDate, setSelectedDate] = useState({
        startDate:new Date() 
    });

  const handleDateChange = (date) => {
      const newDates = {...selectedDate}
      newDates.startDare=date;
    setSelectedDate(newDates);
  };
    const [description , setDescription] = useState({})
    const {id}=useParams();
    const [Item,setItem]=useState([]);
    const history = useHistory()

    const [add,setAdd]=useState(1);

    useEffect(()=>{
        fetch('https://secure-shelf-36035.herokuapp.com/readevent/'+id)
        .then(res => res.json())
        .then(result=> setItem(result))

    },[])

    const handleRegister=()=>{
        const newRegistration = {...loggedInUser , ...selectedDate , ...Item , ...description}
        fetch('https://secure-shelf-36035.herokuapp.com/addregister',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(newRegistration)
        })
        history.push("/registerevent")
    }

 return (
        
        <>
        <Header></Header>
            <Link to="/">Home</Link>
            <Container style={{marginTop:"10px"}}>
                <Row>
                <Col md={6}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"  value={loggedInUser.name}/>

                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"  value={loggedInUser.email}/>

                        <Form.Label>Description</Form.Label>
                        <Form.Control type="email" placeholder="Enter Description" value={setDescription}/>

                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="text" value={Item.eventName} />
                        
                    </Form.Group>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate.startDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
                            
                    
    <Button onClick={handleRegister} variant="primary" type="submit">
        Submit
    </Button>
    </Form>
                        
                            
                </Col>
                <Col md={{span:5,offset:1}} style={{marginTop:"50px"}}>
                    <div>
                        <img src={Item.img} height="440px" width="100%" alt=""/>
                    </div>
                </Col>
                </Row>
            </Container>
        </>
    );
};

export default SigleItem;