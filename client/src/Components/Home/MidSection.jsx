

import {Grid, styled  } from "@mui/material";
import { imageURL } from "../../constants/data";

const Wrapper ={
    marginTop :'10px',
    justifyContent:'space-between'

}

const Image = styled('img')(({theme}) => ({
    marginTop:'10px',
    width:"100%",
    display:"flex",
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:'120px'
    }
}))



const MidSection =()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return(
<>
     <Grid lg={12} sm={12} md={12} xs ={12} container style={Wrapper}>
           {
            imageURL.map(image =>(
                <Grid items lg={4} md={4} sm={12} xs ={12}>
                <img src={image} alt ="adImage" style ={{width:'100%'}}/>
               </Grid>
            ))
           }
     </Grid>
       <Image src = {url} alt = "covid"   />
</>
    )
}
export default MidSection;