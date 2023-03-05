import React, { useEffect } from "react";
import "./Header.css";
import logo from '../../assets/logo.svg';
import Modal from "react-modal";
import Login from "../../screens/login/Login";
import Register from "../../screens/register/Register";
import { Tabs, FormControl, Tab, TextField, Typography, InputLabel, Input } from '@material-ui/core';
import { Button } from "@material-ui/core";
import { Redirect, useHistory  } from 'react-router-dom';
import {ValidatorForm} from 'react-material-ui-form-validator';

const Header = (props) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const [username, setUser] = React.useState();
  const [password, setPassword] = React.useState();

  const history = useHistory();

  // React.useEffect( () => {
  //   alert(props.value);
  // },[]);

  //Handler to fetch value user
  const userNameHandler = (event) =>{
    let userName = event.target.value;
    setUser(userName);
  }

  //Handler to fetch value password
  const passwordHandler = (event) => {
    let passwordValue = event.target.value;
    setPassword(passwordValue);
    
  }

  //Validate user and save it in local memoru
  const loginValidate = (e) => {
    e.preventDefault();
    if(username == "Karthick" && password == "12345"){
      console.log("testing login")
      setIsSubmitted(true);
      closeModal();
    }
  }   

  //Logout Handler
  const Logout =(e) => {
    setIsSubmitted(false);
  }

  //Modal Open and Close
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="header">
      <img src={logo} className="img"/>
      {!isSubmitted &&
         <Button variant="contained" className="float-right" onClick={openModal} color="default">Login</Button>
      }
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        >
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="LOGIN" />
          <Tab label="REGISTER" />
        </Tabs>
        {tabIndex === 0 && (
          // <Login Submitted={setIsSubmitted} close={setIsOpen}/> 
          <div>
          <ValidatorForm className="subscriber-form" onSubmit={loginValidate}>
          <FormControl  autoComplete="off" size="small" onChange={userNameHandler} required >           
            <InputLabel htmlFor="login">Username</InputLabel>
            <Input id="login"></Input>          
          </FormControl>
          <br/>
          <FormControl  autoComplete="off" size="small" required onChange={passwordHandler} >         
            <InputLabel htmlFor="password"  >Password</InputLabel>
            <Input id="password" type="password"></Input>           
          </FormControl>
          <br/>
           <Button variant="contained" color="primary" style={{marginTop: "15px"}} type="submit">
            Login
          </Button>
         </ValidatorForm>        
      </div>
        )}
         {tabIndex === 1 && (
          <Register/>
        )}

      </Modal>
 
       {isSubmitted  &&
         <Button variant="contained" className="float-right" color="default" onClick={Logout}>Logout</Button>
       }

      { props.value &&
          <Button variant="contained" color="primary" className="float-right">Book Show</Button> 
      }
    </div>
  )
};

export default Header;