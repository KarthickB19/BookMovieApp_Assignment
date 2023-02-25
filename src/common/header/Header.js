import React from "react";
import "./Header.css";
import logo from '../../assets/logo.svg';
import { version } from 'react';

const Header = () => {
    return(
        <div className="header">
          <img src={logo} />
        </div>
    )
};

export default Header;