import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Components/Body/Body';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SigleItem from './Components/SingleView/SigleItem';
import "react-datepicker/dist/react-datepicker.css";
import Nothing from './Components/Nothing/Nothing';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegisterEvent from './Components/RegisterEvent/RegisterEvent';
import Admin from './Components/Admin/Admin';



export const userContext = createContext();


function App() {
  const [loggedInUser , setLoggedInUser]= useState({});

  return (
  <userContext.Provider value={[loggedInUser , setLoggedInUser]}>
  <Router>
    <Switch>
      <Route exact path="/">
        <Body></Body>
      </Route>
      <PrivateRoute path="/singleItem/:id">
        <SigleItem></SigleItem>
      </PrivateRoute>
      <PrivateRoute path="/registerevent">
        <RegisterEvent></RegisterEvent>
      </PrivateRoute>
      <Route path="/login">
            <Login></Login>
      </Route>
      <Route path="/admin">
            <Admin></Admin>
      </Route>
      <Route path="*">
        <Nothing></Nothing>
      </Route>
    </Switch>
  </Router>
  </userContext.Provider>
  );
}

export default App;
