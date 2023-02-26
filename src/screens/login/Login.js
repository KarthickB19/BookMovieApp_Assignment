import React from "react";
import { Tabs, FormControl, Tab, TextField, Typography } from '@material-ui/core';
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";


const Login = () => {

  //fetch Value's from TextFields using state
  const [username, setUser] = React.useState();
  const [password, setPassword] = React.useState();

  //Authentication Check
  const [authenticated, setauthenticated] = React.useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
 
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
  const loginValidate = () => {
    if(username == "Karthick" && password == "12345"){
      setauthenticated(true)
      localStorage.setItem("authenticated", true);    
    }
  }
      {if (authenticated === true) {
        return
        <Redirect to="/" /> ;
      } else {
      return(
        <div>
            <FormControl noValidate autoComplete="off" size="small">
            <div>
            <TextField id="standard-basic" label="Username"  required onChange={userNameHandler} />
            </div>
            <div>
            <TextField id="standard-basic" type='password' label="Password"  required onChange={passwordHandler}>
              </TextField>
            </div>
            <div>    
            <Button variant="contained" color="primary"  onClick={loginValidate} style={{marginTop: "15px"}}>
              Login
            </Button>
            </div>
          </FormControl>
        </div>
    )
      }}
};

export default Login;