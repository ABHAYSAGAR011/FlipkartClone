import { Box, Typography,Menu ,MenuItem } from "@mui/material"
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



const MenuStyle = {
    marginTop:'5px'
}
const logoutStyle={
    fontSize:'14px',
    marginLeft:'20px'
}

const Profile = ({account ,setAccount})=>{
const [open,setOpen] = useState(false);

const handleClick =(event)=>{
    setOpen(event.currentTarget)
}

const handleClose =() =>{
    setOpen(false)
}
const logoutUser=()=>{
    setAccount('');
}
    return (
        <>
            <Box onClick ={handleClick}>
                <Typography style ={{marginTop:'2px' ,cursor:"pointer" , paddingRight:"20px"}}>{account}</Typography>
                <Menu style={MenuStyle}
                    
                   anchorEl={open}
                   open={Boolean(open)}
                  onClose={handleClose}
                  
                >
               
               <MenuItem onClick={()=>{handleClose() ;logoutUser()}}><PowerSettingsNewIcon  color ="primary" fontSize ="small"/>
               <Typography style ={logoutStyle}>Logout</Typography></MenuItem>
              </Menu>
            </Box>
        </>
    )
}


export default Profile;