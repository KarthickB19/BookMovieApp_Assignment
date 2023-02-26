import React from "react";
import "./Header.css";
import logo from '../../assets/logo.svg';
import { Button } from "@material-ui/core";
import { Tabs, FormControl, Tab, TextField, Typography } from '@material-ui/core';
import ReactModal from "react-modal";

const Header = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="header">
      <img src={logo} />
      <Button variant="contained" className="float-right" onClick={openModal}>Login</Button>
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
    
        )}
         {tabIndex === 1 && (
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
        )}

      </ReactModal>

      {/* <Button variant="contained" className="float-right">Logout</Button>
          <Button variant="contained" color="primary" className="float-right">Book Show</Button> */}
    </div>
  )
};

export default Header;