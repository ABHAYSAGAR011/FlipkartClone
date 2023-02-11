import { useState ,useContext } from 'react'
import {Box,Button, Typography,styled,Badge} from '@mui/material'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import "./Styles.css"
import LoginDialog from '../Login/LoginDialog'
import { DataContext } from '../../context/DataProvider'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      color: '#FFFFFF',
      fontSize: '12px',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
          color: '#2874f0',
          alignItems: 'center',
          display:'flex',
          flexDirection:'column',
          marginTop: '10px'
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: '#2874f0',
  background: '#FFFFFF',
  textTransform: 'none',
  fontWeight: '600px',
  borderRadius: '2px',
  padding: '5px 40px',
  height: '32px',
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
      background: '#2874f0',
      color: '#FFFFFF'
  }
}));


const CustomButtons =() =>{
    
   const [open ,setOpen] = useState(false);
  const {account,setAccount} = useContext(DataContext);
  
  const {cartItems} = useSelector(state => state.cart)

    const openDialog = () => {
      setOpen(true);
  }

    
    return (
      <Wrapper>
         { account ? <Profile account={account} setAccount={setAccount} />
           :
           <LoginButton variant="contained" onClick={() => openDialog()} style ={{color:'black' ,fontWeight:'600' , fontSize:'15px'}}>Login</LoginButton>
           
       
         }
          
         

        
         <Typography style={{ marginTop: '5px', width: '135px' ,fontSize:'15px'}}>Become a Seller</Typography>
            <Typography style={{ marginTop: '5px' , fontSize:'15px'}}>More</Typography>
        <Container to='/cart'>
        <Badge badgeContent = {cartItems?.length} color='secondary' >
        <ShoppingCartIcon />
        </Badge>
            <Typography style={{marginLeft : '10px'}}>Cart</Typography>
        </Container>
        <LoginDialog open ={open} setOpen ={setOpen}/>
      </Wrapper>
    )
}

export default CustomButtons;