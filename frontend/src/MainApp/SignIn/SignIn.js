import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import KeyIcon from '@mui/icons-material/Key';
import "./SignIn.css"
// import { encrypt } from "../../utils/functions/encryption";
import { signIn } from "../../utils/services/signinService";
import Alert from '@mui/material/Alert';


const SignIn = props =>{
  let router = useHistory()
  const [alert,setAlert] = useState({message:"",status:null})
  const [inputUsername,setUsername] = useState("")
  const [inputPassword,setPassword] = useState("")
  const usernameChangeHandler= event =>{
    setUsername(newval => event.target.value)
  }
  const passwordChangeHandler = event =>{
    setPassword(newval => event.target.value)
  }
  const handleSubmit= async(event)=>{
    event.preventDefault();
    // let encryptedPassword = encrypt(inputPassword)
    // let encryptedUsername = encrypt(inputUsername)
    let obj = {
      username:inputUsername,
      password:inputPassword
    }
    let response = await signIn(obj)
    if(response.data.status===true){
      setPassword("")
      setUsername("")
      setTimeout(() => {
        router.push("/landingPage")
      }, 5000)
      props.onAuth(true);
    }
    setAlert(updatedObj =>{ return {message:response.data.message,status:response.data.status}})
    setTimeout(() => {
      setAlert( updatedObj => {
        let obj =  {message:"",status:null}
        return obj});
    }, 4000)
  }
  const showAlert = () =>{
    return alert.status
  }
  return (
    <React.Fragment>
    {showAlert()===true?<Alert className="alert" severity="success">{alert.message}</Alert>:showAlert()===false?<Alert className="alert" severity="error">{alert.message}</Alert>:<></>}
    <div className="mainSignInDiv container-fluid d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit}>
          <Card className="card text-white flex align-items-center rounded-5">
            <div className="pb-2 pt-4 Card-header">
              <h3 className="cardTitle fw-bold">The Social Network</h3>
            </div>
            <hr className="signinDivider mb-3" />
            <div className="inputbg ms-5 me-5 row d-flex justify-content-around">
              <Box className=" inputbg p-0 col-10 border-bottom border-white mb-3" >
                <PersonRoundedIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                <TextField 
                value={inputUsername}
                onChange={usernameChangeHandler}
                sx={{  input: { color: 'white' }}} 
                InputLabelProps={{ style: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', width: '100%', color: 'white' } }} 
                id="input-with-sx" 
                label="Username" 
                variant="standard" 
                required 
                InputProps={{ disableUnderline: true }} />
              </Box>
            </div>
            <div className=" ms-5 me-5 pb-2 row d-flex justify-content-around">
              <Box className="inputbg p-0  col-10 border-bottom border-white mb-3">
                <KeyIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                <TextField 
                value={inputPassword}
                onChange={passwordChangeHandler}
                sx={{ input: {color: "white"}}}  
                InputLabelProps={{ style: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', width: '100%', color: 'white', border: "none" } }} 
                label="Password" 
                variant="standard" 
                type="password" 
                required 
                InputProps={{ disableUnderline: true }} />
              </Box>
            </div>
            <Button type="submit" className="mt-4 mb-5 text-white border-white" variant="outlined">Log In</Button>
            <div className="pb-4 d-flex justify-content-center align-items-center">
              <hr className="signInHalfDivider mb-3"/>
              <span className="me-2 ms-2">or</span>
              <hr className="signInHalfDivider mb-3"/>
            </div>
            <Link to="/signup" className="link"><Button className="mt-4 mb-5 text-white border-white" variant="outlined">Sign Up</Button></Link>
          </Card>
      </form>
    </div>
    </React.Fragment>
)}

export default SignIn;
