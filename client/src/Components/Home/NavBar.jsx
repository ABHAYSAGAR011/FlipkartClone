
import {Box, styled, Typography} from "@mui/material"
import { navData } from "../../constants/data";
import "./HomeStyle.css"

const Component = styled(Box)(({theme})=>({
  display:"flex",
  margin:"55px 130px 0 130px",
  justifyContent:"space-between",
  overflow:"hidden",
  [theme.breakpoints.down('lg')]:{
    margin:'0'
  }
}))
const NavBar = ()=>{
    return (
      <Box style ={{background:'#fff'}}>

      
        <Component>
          {
            navData.map((data) => {
               return( <Box className ="container">
                    <img src ={data.url} alt="nav"style={{width: '64px'}} />
                    <Typography className="text">{data.text}</Typography>
                </Box>
               )
            }
            
            )
          }
        </Component>

        </Box>
    )
}

export default NavBar;