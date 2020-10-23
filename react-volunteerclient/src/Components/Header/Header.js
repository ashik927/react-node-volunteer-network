import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';

const Header = () => {
    return (
        <div>
             <Container>
            <Col md={12}>
            <div className="logo">
              <Link to="/" ><img src={logo} width="150px" height="40px" alt=""/></Link>
            </div>
            <div className="RightNav">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li>Donation</li>
                    <li><Link to="/registerevent">Events</Link></li>
                    <li>Blog</li>
                    <li> <Link to="/login"><Button className="regBtn">Register</Button></Link> </li>
                    <li><Link to="/admin"><Button className="regBtn" variant="dark">Admin</Button> </Link></li>
                </ul>
            </div>
            </Col>
            </Container>
        </div>
    );
};

export default Header;