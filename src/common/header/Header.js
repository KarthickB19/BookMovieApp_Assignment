import React from "react";
import "./Header.css";
import logo from '../../assets/logo.svg';
import { version } from 'react';
import { Button } from "@material-ui/core";

const Header = () => {
    return(
        <div className="header">
          <img src={logo} />
          <Button variant="contained" className="float-right">Login</Button>
          {/* <Button variant="contained" className="float-right">Logout</Button>
          <Button variant="contained" color="primary" className="float-right">Book Show</Button> */}
        </div>
    )
};

export default Header;