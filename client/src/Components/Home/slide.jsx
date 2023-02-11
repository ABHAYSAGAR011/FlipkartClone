import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

 import Countdown from "react-countdown"
import {Box, Button, Divider, Typography} from "@mui/material"

import { Link } from "react-router-dom";

const Component = {
    marginTop :'12px',
    background :'#ffffff'

}

const Deal ={
    padding: '15px 20px',
    display: 'flex'
}

const Timer={
    display:'flex',
    marginLeft : '12px',
    alignItems:"centre",
     color:'#7f7f7f'
}

const DealText ={
    fontSize:"20px",
    fontWeight:'600',
    marginRight:'25px',
    lineHeight:'32px'
}

const ButtonStyle ={
    marginLeft:'auto',
    backgrondColor:'#2874f0',
    borderRadius:"2px",
    fontSize:'13px',
    fontWeight:"600"
}

const Image ={
    width:'auto',
    height:'150px'
}

const TextTitle={
 fontSize:'14px',
 marginTop:'5px',
 fontWeight:'600',
 color:'#212121'
 
}
const TextDiscount={
    fontSize:'14px',
    marginTop:'5px',
    color:'green'
}
const TextTagline={
    fontSize:'14px',
    marginTop:'5px',
    color:'#212121',
    opacity:'.6'

}

const responsive = {
        
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const Slide =({products , title, timer }) =>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer =({hours,minutes,seconds})=>{
        return <Box variant ="span" >{hours}:{minutes}:{seconds} Left</Box>
    }

    return (
        <Box style ={Component}>
        <Box style ={Deal}> <Typography style={DealText} >{title}</Typography>
         {
            timer &&
            <Box style ={Timer}>
            <img src ={timerURL}  alt ="timer"  style={{width:'24px' }}/>
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
         </Box>
         }
         <Button style ={ButtonStyle} variant="contained" color="primary">View All </Button>
        </Box>
        <Divider />

            <Carousel 
             responsive={responsive}
             swipeable={false}
             draggable={false}
             infinite={true}
             autoPlay={true}
             autoPlaySpeed={4000}
             keyBoardControl={true}
             centerMode={true}
             containerClass="carousel-container"
             dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px"
            >
            {
                products.map(product => (
                <Link to ={`product/${product.id}`} style={{textDecoration:'none'}}>
                    <Box textAlign="center" style ={{padding:'25px 15px'}}>
                    <img src = {product.url} alt ="product" style={Image}/>
                    <Typography style ={TextTitle}>{product.title.shortTitle}</Typography>
                    <Typography  style ={TextDiscount}>{product.discount}</Typography>
                    <Typography  style ={TextTagline}>{product.tagline}</Typography>
                    </Box>
                </Link>
                ))
            }

        </Carousel>
        </Box>
        
    )
}

export default Slide;