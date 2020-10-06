import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import { Col,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const EventList = (props) => {
    const {id,eventName,img}=props.item;

    
    return (
        
            
    <Col md='3'className="p-2 bd-highlight col-example">
      <Link to={"/singleItem/"+id}>
        <MDBCard className="MDBCard">
          <MDBCardImage
            hover
            overlay='white-light'
            className=' card-img-top'
            src={img}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <h5>{eventName}</h5>
            </MDBCardTitle>
          </MDBCardBody>
         </MDBCard>
        </Link>
      </Col>

    
        
    );
};

export default EventList;