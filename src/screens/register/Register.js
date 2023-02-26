import React from "react";
import { Tabs, FormControl, Tab, TextField, Typography } from '@material-ui/core';
import { Button } from "@material-ui/core";

const Register =() => {
    return(
        <div>
<FormControl noValidate autoComplete="off">
            <div>
            <TextField id="standard-basic" label="First Name" className="input" required/>
            </div>
            <div>
            <TextField id="standard-basic" label="Last Name" className="input" required/>
            </div>
            <div>
            <TextField id="standard-basic" label="Email" className="input" required/>
            </div>
            <div>
            <TextField id="standard-basic" label="Password" required/>
            </div>
            <div>
            <TextField id="standard-basic" label="Contact No" className="input" required/>
            </div>
            <div>
            <Button variant="contained" color="primary">
              Register
            </Button>
            </div>
          </FormControl>
          </div>
    )
};

export default Register;