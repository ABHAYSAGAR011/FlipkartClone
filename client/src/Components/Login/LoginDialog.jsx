import React, { useState,useContext } from "react"
import {Button, Dialog, TextField, Typography} from "@mui/material"

import { Box } from "@mui/system"
import "./LoginStyle.css"
import { authenicateSignup ,authenicateLogin } from "../../Service/api"
import { DataContext } from "../../context/DataProvider"
const LoginButtonStyle ={
    marginTop:'20px',
    textTransform:'none',
    background: '#FB641B',
    color:'#fff',
    height:'48px',
    borderRadius:'2px'


}
const RequestButtonStyle ={
    marginTop:'20px',
    textTransform:'none',
    background: '#fff',
    color:'#2874f0',
    height:'48px',
    borderRadius:'2px',
    boxShadow: '0 2px 4px 0 rgb(0 0 0/ 20%)'
}
const textStyle={
    marginTop:'20px',
    fontSize:'12px',
    color:'#878787'

}
const CreateAcccountStyle={
    marginTop:'20px',
    fontSize:'14px',
    color:'#2874f0',
    fontWeight:'600',
    cursor:'pointer',
    textAlign:'center'
}
const ErrorStyle ={
    fontSize:'10px',
    color:'#ff6161',
    lineHeight:'3px',
    marginTop:'10px',
    fontWeight:'600'
}
const accountIntialValue ={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders,Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here",
        subHeading : "Sign up with your email and mobile number to get started"
    }
}
 const singupIntitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''

 }
 const loginIntialValues={
   username : '',
   password : ''
 }


const LoginDialog =({open ,setOpen}) =>{
    const [singin ,toggle] = useState(accountIntialValue.login)
    const [signup ,setSignup] = useState(singupIntitialValues);
    const [login,setLogin] = useState(loginIntialValues)
    const [error ,setError] = useState(false);
    const {setAccount} = useContext(DataContext);

    const handleClose =() =>{
        setOpen(false)
        toggle(accountIntialValue.login)
        setError(false)
    }
    const handleToggle =() =>{
        toggle(accountIntialValue.signup)
    }

   const onInputChange = (event ) =>{
      setSignup({...signup,[event.target.name]:event.target.value})
   }

  const userSignup =async ()=> {
    let response = await authenicateSignup(signup);
      if(!response) return ;
      handleClose();
      setAccount(signup.firstname);
  }
 const onValueChange=(e)=>{
    setLogin({...login ,[e.target.name]:e.target.value})

 }
const loginUser = async () =>{
    let response = await authenicateLogin(login)
   if(response.status === 200){
    handleClose();
    setAccount(response.data.data.firstname);
   }else{
     setError(true)
   }
}    


    return(
       <Dialog open={open} onClose ={handleClose} PaperProps={{sx:{maxWidth:'unset' , maxHeight:'unset'}}}>
        <Box className ="Dialog__container">
      <Box className="Dialog_container2">
        
      {singin.view=== "login"?<React.Fragment>
      <Box className="Dialog_Image">
        <Typography variant="h5" style ={{color:"#fff" ,fontWeight:"600"}}>{singin.heading}</Typography>
        <Typography style ={{marginTop:'20px',color:"#fff" ,fontWeight:"600"}}>{singin.subHeading}</Typography>
     </Box>
      <Box className ="Dialog__Wrapper">
                <TextField variant ="standard" onChange={(e)=>onValueChange(e)} name='username' label="Enter Username"/>
                {error && <Typography style ={ErrorStyle}>Please enter valid username or password</Typography>}
                <TextField style ={{marginTop:'10spx'}} onChange={(e)=>onValueChange(e)} name='password' variant="standard" label ="Enter Password" />
                <Typography style={textStyle}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                <Button style={LoginButtonStyle} onClick ={()=>loginUser()}>Login</Button>
                <Typography style={{textAlign:"center" , marginTop:"20px"}}>OR</Typography>
                <Button style={RequestButtonStyle}>Request OTP</Button>
                <Typography  style={CreateAcccountStyle} onClick ={()=> handleToggle()}>New to Flipkart? Create an account</Typography>
            </Box>
      </React.Fragment>
      
            :<React.Fragment>
            <Box className="Dialog_Image">
          <Typography variant="h5" style ={{color:"#fff" ,fontWeight:"600"}}>{singin.heading}</Typography>
          <Typography style ={{marginTop:'20px',color:"#fff" ,fontWeight:"600"}}>{singin.subHeading}</Typography>
          </Box>
           <Box className ="Dialog__Wrapper">
                <TextField variant ="standard"  onChange={(e) => onInputChange(e)} name="firstname" label="Enter Your First Name"/>
                <TextField style ={{marginTop:'10px'}}variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label ="Enter Your Last Name" />
                <TextField style ={{marginTop:'10px'}}variant="standard" onChange={(e) => onInputChange(e)} name="username" label ="Enter Username" />

                <TextField style ={{marginTop:'10px'}}variant="standard" onChange={(e) => onInputChange(e)} name="email" label ="Enter Your Email Address" />
                <TextField style ={{marginTop:'10px'}}variant="standard" onChange={(e) => onInputChange(e)} name="password" label ="Enter Password" />
                <TextField style ={{marginTop:'10px'}}variant="standard" onChange={(e) => onInputChange(e)} name="phone" label ="Enter Your Mobile Number" />
                <Button style={LoginButtonStyle} onClick = {()=>userSignup()}>Continue</Button>
               
            </Box>
            </React.Fragment>
            

      }
            
           
        
            
        </Box>
           
 </Box>
       </Dialog>
    )
}
export default LoginDialog;