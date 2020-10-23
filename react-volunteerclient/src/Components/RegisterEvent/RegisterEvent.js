import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { userContext } from '../../App';
import Header from '../Header/Header';
import RegisterEventShow from './RegisterEventShow';

const RegisterEvent = () => {
    const [readItems , setReadItem] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(userContext);

    useEffect(()=>{
        fetch('https://secure-shelf-36035.herokuapp.com/readregisterevent?email='+loggedInUser.email)
        .then(res => res.json())
        .then(result=> setReadItem(result))
},[])
console.log(readItems);
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                {
                readItems.map(pd=>
                <RegisterEventShow readItem={pd}></RegisterEventShow>
                    )
            }
                </Row>
            </Container>
            
        </div>
    );
};

export default RegisterEvent;