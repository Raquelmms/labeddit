//import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { StyledToolBar } from  "./styled"
import { useNavigate } from 'react-router-dom'
import { goToLogin, goToFeed } from '../../routes/coordinator'

const Header = ({rightButtonText, setRightButtonText}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    
    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if(token){
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        }else{
            goToLogin(navigate)
        }
    }

  return (

      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={()=> goToFeed(navigate)} color="inherit" >
            LabEddit
          </Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolBar>
      </AppBar>
  
  );
}


export default Header