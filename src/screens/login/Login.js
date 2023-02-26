import React from "react";
import { Tabs, FormControl, Tab, TextField, Typography } from '@material-ui/core';
import { Button } from "@material-ui/core";

const Login = () => {
    return(
        <div>
            <FormControl noValidate autoComplete="off" size="small">
            <div>
            <TextField id="standard-basic" label="Username" multiline required/>
            </div>
            <div>
            <TextField id="standard-basic" label="Password" multiline required/>
            </div>
            <div>    
            <Button variant="contained" color="primary">
              Login
            </Button>
            </div>
          </FormControl>
        </div>
    )
};

export default Login;