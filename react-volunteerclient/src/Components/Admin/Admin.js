import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import Header from '../Header/Header';
import AdminAdd from './AdminAdd';
import Adminshow from './Adminshow';

const Admin = () => {
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('https://secure-shelf-36035.herokuapp.com/adminreadregisterevent')
        .then(res => res.json())
        .then(result=> setData(result))
},[])
    return (
        <Container>
            <Header></Header>
            <Col md={12}>
            <h1>All register List</h1>
            {
                data.map(pd=> 
                    <Adminshow show={pd}></Adminshow>
                )
                
            }
            </Col>
            <Col md={6}>
            <AdminAdd></AdminAdd>
            </Col>
        </Container>
    );
};

export default Admin;