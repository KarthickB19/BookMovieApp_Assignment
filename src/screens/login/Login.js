import React from "react";
import { Tabs, FormControl, Tab, TextField, Typography, InputLabel, Input } from '@material-ui/core';
import { Button } from "@material-ui/core";
import { Redirect, useHistory  } from 'react-router-dom';
import {ValidatorForm} from 'react-material-ui-form-validator'
import Header from "../../common/header/Header";

const Login = ({Submitted} ,{close}) => {

  //fetch Value's from TextFields using state
  const [username, setUser] = React.useState();
  const [password, setPassword] = React.useState();

  const history = useHistory();

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
      Submitted(true);  
      close(false);
      console.log(Submitted)
      alert(Submitted);
      history.push("/");
    }
  }   
      return(
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
    )
};

export default Login;