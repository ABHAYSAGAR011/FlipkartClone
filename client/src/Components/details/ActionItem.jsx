import { useState } from "react";
import { Box, Button ,styled } from "@mui/material";

import {ShoppingCart as Cart , FlashOn as Falsh} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addCart} from '../../redux/actions/cartAction'

import { payUsingPaytm } from "../../Service/api";
import {post} from '../../utils/paytm'
const LeftContainer= styled(Box)(({theme})=>({
    minWidth :"40%",
    padding : "40px 0 0 80px",
    [theme.breakpoints.down('lg')]:{
      padding:'20px 40px'
    }
}))
  
;
const Image = styled('img')({
  
   width: '95%',
   padding:'15px'
  
})

const StyledButton = styled(Button)(({theme})=>({
   width:'48%',
   height: '50px',
   borderRadius:'2px',
   [theme.breakpoints.down('lg')]:{
      width:'46%'
   },
   [theme.breakpoints.down('sm')]:{
      width:'48%'
   }
   

}))



const ActionItems= ({product}) =>{
     
    const navigate = useNavigate();
    const  dispatch = useDispatch();
    const [quantity , setQuantity] = useState(1);
    const {id} = product;


    const addItemToCart =() =>{
      dispatch(addCart(id,quantity))
      navigate('/cart')
    }

    const buyNow = () =>{
      let response = payUsingPaytm({amount:800 , email:'abhay@gmail.com'})
      let information ={
         action : "https://securegw-stage.paytm.in/order/process",
         params: response
      }
      post(information);
    }

    return(
    
     <LeftContainer>
     <Box style ={{padding:'15px 20px' ,border:"1px solid #f0f0f0"}} >
     <Image src={product.detailUrl} alt ="deatilPhotoProduct"/>
     </Box>
        
        < StyledButton variant="contained" onClick = {() => addItemToCart()} style={{ marginTop:"8px" ,marginRight:'10px', background:'#ff9f00'}}> <Cart />Add to Cart</ StyledButton>
        < StyledButton variant="contained" onClick = {() => buyNow()} style ={{marginTop:"8px" ,background:'#fb541b'}}> <Falsh />Buy Now</ StyledButton>
     </LeftContainer>
    
        )
}


export default ActionItems;