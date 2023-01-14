
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { Link,useHistory } from "react-router-dom";
import KeyIcon from '@mui/icons-material/Key';
import CallIcon from '@mui/icons-material/Call';
import {sendData} from "../../utils/services/signupService.js";
// import { encrypt } from "../../utils/functions/encryption.js";
import Alert from '@mui/material/Alert';
import "./SignUp.css"


const SignUp = () => {
  let router = useHistory()
  // Form Validations
  let a = 0;
  const [saveUser,setsaveUser] = useState({message:"",status:null})
  const [inputEmail,setEmail] = useState("")
  const [inputNumber,setNumber] = useState("")
  const [inputUsername,setUsername] = useState("")
  const [inputPassword,setPassword] = useState("")
  
  useEffect(()=>{
    console.log(saveUser)
  },[saveUser])

  
  // Change Handlers
  const passwordChangeHandler = event =>{
    setPassword(newval => event.target.value)
  }
  const usernameChangeHandler = event =>{
    setUsername(newval => event.target.value)
  }
  const numberChangeHandler = event =>{
    setNumber(newval => event.target.value)
  }
  const emailChangeHandler = event =>{
    setEmail(newval => event.target.value)
  }

  // Handle Form Submission
  const validPassword = password =>{
    
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(password.length<6 || !/\d/.test(password) || /^[A-Z]+$/.test(password) || !format.test(password)){
      
      return true
    };
    return false
  }

  const masti = () =>{
    
    if(validPassword(inputPassword) && a===0){
      document.getElementById("mastiButton").click()
      let btn = document.getElementById("mastiButton")
      
      btn.style.transitionDuration = '1s'
      btn.style.transition="1s"

      btn.style.transform = "translateX(-160%)"
      
      a=1
      return
    }
    else if(validPassword(inputPassword) && a===1){
      let btn = document.getElementById("mastiButton")
      btn.style.transitionDuration = '1s'
      btn.style.transition="1s"

      btn.style.transform = "translateX(160%)"
      a=2
      return
    }
    else if(validPassword(inputPassword) && a===2){
      let btn = document.getElementById("mastiButton")
      btn.style.transitionDuration = '1s'
      btn.style.transition="1s"

      btn.style.transform = "translateX(160%)"
      btn.style.transform = "rotate(0.5turn)"
      a=3
      return
    }
    else if(validPassword(inputPassword) && a===3){
      document.getElementById("mastiButton").click()
      let btn = document.getElementById("mastiButton")
      btn.style.transitionDuration = '1s'
      btn.style.transition="1s"

      btn.style.transform = "translateX(-160%)"
      
      
      // btn.style.transform = "rotate(0.5turn)"
      a=1
      return
    }
    else{
      document.getElementById("mastiButton").style.transform = "translateX(0%)"
      a=0
      return
    }
  }
  async function handleSubmit(event) {
    event.preventDefault()
    // let encryptedPassword = encrypt(inputPassword.toString())
    // let encryptedUsername = encrypt(inputUsername.toString())
    let obj = {
      username:inputUsername,
      email:inputEmail,
      phoneNumber:inputNumber,
      password:inputPassword
    }
    
    let response = await (sendData(obj))

    if (response.data.status===true){
      setEmail(newval =>"")
      setPassword(newval =>"")
      setUsername(newval =>"")
      setNumber(newval =>"")
      
    }
    setsaveUser(updatedObj =>{ return {message:response.data.message,status:response.data.status}})
    setTimeout(() => {

      setsaveUser( updatedObj => {
        let obj =  {message:"",status:null}
        return obj});
      
      
    }, 4000)
    setTimeout(() => {
      router.push("/")
    }, 5000)
    
  }
  const showAlert = ()=>{
    if (saveUser.status===true){
      return true
    }
    else if(saveUser.status===false){return false
    }
    return null
  }
  // HTML CODE
  return (
    <React.Fragment>
    {showAlert()===true?<Alert className="alert" severity="success">{saveUser.message}</Alert>:showAlert()===false?<Alert className="alert" severity="error">{saveUser.message}</Alert>:<></>}
    <div className="mainDiv container-fluid d-flex align-items-center justify-content-center">
      
        <form id="form" onSubmit={handleSubmit}>
          <Card className="card text-white flex align-items-center rounded-5">
            <div className="pb-2 pt-4 Card-header">
              <h3 className="card-heading fw-bold">The Social Network</h3>
            </div>
            <hr className="divider mb-3"/>
            <div className="row d-flex justify-content-around">
              <Box className="inputbg p-0 col-sm-4 col-7 border-bottom border-white mb-3">

                <PersonRoundedIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                <TextField 
                onChange={usernameChangeHandler} 
                value={inputUsername} 
                inputProps={{pattern:"[0-9A-Za-z_.]{6,30}",title:"Use only alphabets, numbers, _ and ."}} 
                sx={{  input: { color: 'white' }}} 
                InputLabelProps={{ style: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', width: '100%', color: 'white' } }} 
                required 
                id="input-with-sx" 
                label="Username" 
                variant="standard"  
                InputProps={{ disableUnderline: true }} />

              </Box>
              <Box className="inputbg p-0 col-sm-4 col-7 border-bottom border-white mb-3">
                <MailRoundedIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                <TextField 
                onChange={emailChangeHandler} 
                value={inputEmail} 
                inputProps={{pattern:"[a-zA-z0-9]{1,64}[@]{1}[a-zA-z0-9]{1,63}[.]{1}[a-zA-Z0-9]{1,63}",title:"Please enter a valid email format"}} 
                sx={{ input: {color: "white"}}} 
                InputLabelProps={{ style: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', width: '100%', color: 'white', border: "none" } }} 
                required 
                label="Email" 
                variant="standard" 
                type="email"  
                InputProps={{ disableUnderline: true }} />
              </Box>
            </div>
            <div className="pb-4 row flex justify-content-around">
              <Box className="inputbg p-0 col-sm-4 col-7 border-bottom border-white mb-3">
                <CallIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                <TextField 
                onChange={numberChangeHandler} 
                value={inputNumber} 
                inputProps={{pattern:"[0]{1}[3]{1}[0-9]{9}", 
                title:"Enter number without -"}} 
                sx={{ input: {color: "white"}}}  
                InputLabelProps={{ style: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', width: '100%', color: 'white', border: "none" } }} 
                label="Mobile Number" 
                variant="standard" 
                type="tel"  
                InputProps={{ disableUnderline: true }} />
              </Box>
              <Box className="inputbg p-0 col-sm-4 col-7 border-bottom border-white mb-3">
                <KeyIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                <TextField 
                value={inputPassword} 
                onChange={passwordChangeHandler} 
                error={validPassword(inputPassword)} 
                inputProps={{pattern:"[A-Za-z0-9~`!@#$%^&*_+=|;<,>.?/-]{8,30}",title:"Please enter an atleast 6 Character password with 1 of each Uppercase, Lowercase, Special Character and a Number."}} 
                sx={{ input: {color: "white"}}}  
                InputLabelProps={{ style: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', width: '100%', color: 'white', border: "none" } }} 
                name="userPassword" 
                id="userPassword" 
                label="Password" 
                variant="standard" 
                type="password" 
                required 
                InputProps={{ disableUnderline: true }} />
              </Box>
            </div>
            <label className="textCenter col-8">By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</label>
            <Button 
            onMouseOver={masti} 
            id="mastiButton"  
            type="submit" 
            className="mt-5 mb-5 text-white border-white" 
            variant="outlined">
              Sign Up
            </Button>
            <div className="pb-4 d-flex justify-content-center align-items-center">
              <hr className="mb-3 dividerHalf" />
              <span className="me-2 ms-2">or</span>
              <hr className="mb-3 dividerHalf" />
            </div>
            <Link className="link" to="/signin">
              <Button className="mt-4 mb-5 text-white border-white" variant="outlined">
                Log In
              </Button>
            </Link>
          </Card>
        </form>
      
    </div>
    </React.Fragment>
  )
}

export default SignUp;
