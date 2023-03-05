import React from "react";
import { Tabs, FormControl, Tab, TextField, Typography } from '@material-ui/core';
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const Register = () => {

  const [status,setStatus] = React.useState(false);

  const [addForm,setForm] = React.useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    contact: ''
});

  const {name,lastname,email,password,contact}=addForm;

  const inputChangedHandler = (e) => {
      const state = addForm;
      state[e.target.name] = e.target.value;
      setForm({...state});
  }

  const onFormSubmitted = (e) => {
   setStatus(true);
   alert(status);
  }
  return (
    <div>
      <ValidatorForm  onSubmit={onFormSubmitted}>
        <TextValidator
          id="name"
          label="First name"
          name="name"
          type="text"
          value={name}
          onChange={inputChangedHandler}
          validators={['required']}
          errorMessages={['required']}
        />

          <TextValidator
          id="lastname"
          label="Last name"
          type="text"
          name="lastname"
          value={lastname}
          onChange={inputChangedHandler}
          validators={['required']}
          errorMessages={['required']}
        />
        <TextValidator
          id="email"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={inputChangedHandler}
          validators={['required']}
          errorMessages={['required']}
        />
        <TextValidator
          id="password"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={inputChangedHandler}
          validators={['required']}
          errorMessages={['required']}
        />
        <TextValidator
          id="contact"
          label="Contact No"
          type="text"
          name="contact"
          value={contact}
          onChange={inputChangedHandler}
          validators={['required']}
          errorMessages={['required']}
        />  
        {
          status  && <p>Registration Successful. Please Login!</p>
        }
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
       
      </ValidatorForm>
    </div>
  )
};

export default Register;