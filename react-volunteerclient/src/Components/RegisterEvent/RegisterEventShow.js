import React from 'react';
import { Button, Card } from 'react-bootstrap';

const RegisterEventShow = (props) => {
    const deleteItem=(id)=>{
        fetch('https://secure-shelf-36035.herokuapp.com/deleteitem/'+id,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(result=>console.log("success"))
    }
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.readItem.img} />
                <Card.Body>
                    <Card.Title>{props.readItem.eventName}</Card.Title>
                    <Card.Text>
                   {props.readItem.startDate}
                    </Card.Text>
                    <Button onClick={()=>deleteItem( props.readItem.id)} variant="primary">cancel</Button>
                </Card.Body>
                </Card>
        </div>
    );
};

export default RegisterEventShow;