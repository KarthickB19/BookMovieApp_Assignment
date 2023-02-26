import React from "react";
import "./Header.css";
import logo from '../../assets/logo.svg';
import { Button } from "@material-ui/core";
import { Tabs, Tab } from '@material-ui/core';
import ReactModal from "react-modal";
import Login from "../../screens/login/Login";
import Register from "../../screens/register/Register";

const Header = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  //Validate if the user is logged in to show the logout button
  const [authenticated, setauthenticated] = React.useState(false);
  
  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser != null) {
      setauthenticated(loggedInUser);
      
    }
  }, []);

 

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="header">
      <img src={logo} className="img"/>
      {authenticated &&
         <Button variant="contained" className="float-right" onClick={openModal}>Login</Button>
      }
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
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
          <Login/> 
        )}
         {tabIndex === 1 && (
          <Register/>
        )}

      </ReactModal>
 
       {!authenticated  &&
         <Button variant="contained" className="float-right">Logout</Button>
       }

      {/* 
          <Button variant="contained" color="primary" className="float-right">Book Show</Button> */}
    </div>
  )
};

export default Header;