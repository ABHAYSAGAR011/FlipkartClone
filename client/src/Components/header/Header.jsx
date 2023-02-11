import {AppBar,Toolbar,Box,Typography,IconButton,List,ListItem, Drawer,styled} from "@mui/material"
import "./Styles.css"
import { Menu } from "@mui/icons-material";
// Components

import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import { useState } from "react";




const CustomButtonsWrapper=styled(Box)(({theme})=>({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))

;
const MenuButton = styled(IconButton)(({theme}) => ({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
})) 

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
   const [open ,setOpen] = useState(false)
const handleOpen=() =>{
  setOpen(true)

}
const handleClose=() =>{
  setOpen(false)



}


    return (
       <AppBar className="appBar">
     
        <Toolbar style={{minHeight:'55px'}}>
        <MenuButton color ="inherit" onClick={handleOpen}>
            <Menu />
        </MenuButton>
        <Drawer open ={open} onClose={handleClose}>
        <Box style ={{width:'200px' }} onClick ={handleClose} >
          <List>
            <ListItem button>
             <CustomButtons />
            </ListItem>
        </List>
    </Box>
        </Drawer>
        <Box className ="Box" >
    <Link to ={`/`} style ={{textDecoration:"none" ,color:'inherit'}}>
       
         <img src ={logoURL} alt="flipkart" className="logo"/>
         <Box style ={{display :'flex'}}>
            <Typography className="Explore">
                Explore 
               <Box component ="span" style ={{color:'#FFF500'}}> Plus </Box>
            </Typography>
            <img src = {subURL} alt ="plus-logo" className="PlusImage"/>
        </Box>
        
    </Link>
      </Box>

    <Search />
    <CustomButtonsWrapper>
        <CustomButtons />
    </CustomButtonsWrapper>
        </Toolbar>
       </AppBar>
    )
}

export default Header;