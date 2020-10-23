import React, { useEffect, useState } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import logo from '../../images/logo2.png';
import './Body.css';
import headerImage from '../../images/bannerbackground.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton } from '@material-ui/core';
import Mainbar from '../Navbar/Mainbar';
import fakedata from '../../fakeData'
import EventList from '../EventList/EvenList';
import Header from '../Header/Header';

const Body = () => {
    const [data,setData]=useState(fakedata);
    const [cart,setCart]=useState([]);
    
    const addEvent=()=>{
        fetch('https://secure-shelf-36035.herokuapp.com/addevent',{
            method: 'POST',
           headers:{'Content-Type': 'application/json'},
           body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data=> console.log(data))
    }
        
    useEffect(()=>{
        fetch('https://secure-shelf-36035.herokuapp.com/readevent')
        .then(res => res.json())
        .then(result=> setCart(result))

    },[])
    

    return (
        <>
        
        {/* <button onClick={addEvent}>Add product</button> */}
        <Header></Header>
      
        <Col md={12}>
        <div>
        <div >
            <div className="bgsearch">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <input type="text" placeholder="search your need"/>
                <button>Search</button>
            </div>
        </div>
        </div>
        </Col>
       
            <Container>
        <Col md={12} className="d-flex flex-wrap bd-highlight example-parent">
        {
                cart.map(pd=>
                <EventList item={pd}></EventList>
                    )
            }
        </Col>
        </Container>
        </>
        
    );
};

export default Body;