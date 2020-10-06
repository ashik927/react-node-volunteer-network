import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {userContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBModalFooter, MDBRow } from 'mdbreact';
import { Button } from '@material-ui/core';


firebase.initializeApp(firebaseConfig);
function Login() {
  const [loggedInUser,setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser , setNewUser] = useState(false);
  const[user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password:'',
    error:'',
    success:false,
    photoUrl:''
  });
  const provider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleClick=()=>{
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
       const{displayName, email, photoURL}= res.user;
       const signedInUser ={
        isSignedIn: true,
        name: displayName,
        email:email ,
        photoUrl:photoURL
       }
       setUser(signedInUser);
       setLoggedInUser(signedInUser);
       history.replace(from);
       
    })
 }
 

const handleSubmit=(e) => {
  if(newUser && user.email && user.password){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res=>{
      const newUserInfo = {...user};
      newUserInfo.success =true;
      newUserInfo.error='';
      userUpdateName(user.name);
      setUser(newUserInfo);
      console.log("user info", res.user);
    })
    .catch(error =>{
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success=false;
      setUser(newUserInfo);
    });
  }
  if(!newUser && user.email && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res=>{
      const newUserInfo = {...user};
      newUserInfo.success =true;
      newUserInfo.error='';
      setLoggedInUser(newUserInfo);
      history.replace(from);
      setUser(newUserInfo);
    })
    .catch(error =>{
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success=false;
      setUser(newUserInfo);
    });
  }
  e.preventDefault()
}
const handleBlur = (e) => {
      
      let isFieldValid = true;
      if(e.target.name==="email"){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if(e.target.name==="password"){
        const isPasswordLength = e.target.value.length>6;
        const isPasswordTest = /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordLength && isPasswordTest;
      }
      if(isFieldValid){
        const setNewInfo = {...user};
        setNewInfo[e.target.name] = e.target.value;
        setUser(setNewInfo);
      }
}
 const userUpdateName = name => {
  var user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name
  }).then(function() {
   console.log("user name set success");
  }).catch(function(error) {
    console.log(error);
  });
 }

  return (
      <div className="App">
          <div className="login">
            <Button onClick={handleClick}>Login With Google</Button>
          </div>
      </div>
    
  );
}

export default Login;
