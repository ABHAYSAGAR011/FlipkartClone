import { useEffect } from "react";
// Components
import NavBar from "./NavBar";
import Banner  from "./Banner";
import {Box} from "@mui/material"
import { getProducts } from "../../redux/actions/productAction";
import {useDispatch ,useSelector} from "react-redux"
import Slide from "./slide.jsx";
import MidSlide from './MidSlide.jsx'

import MidSection from "./MidSection.jsx";





const Home = ()=>{
   
    const {products} = useSelector (state => state.getProducts)

    const dispatch =useDispatch();
    useEffect(()=>{
          dispatch(getProducts())
    }, [dispatch])
    return(
        <>
           <NavBar />
           <Box className="common">
              <Banner />
              <MidSlide products={products} title ="Deal of the Day" timer ={true}/>
               <MidSection />
              <Slide products={products} title ="Discounts for You"  timer ={false}/>
              <Slide products={products} title ="Suggesting Items" timer ={false}/>
              <Slide products={products} title="Top Selected" timer ={false}/>
              <Slide products={products} title ="Trending Offers" timer ={false}/>
              <Slide products={products} title ="Recommened Items" timer ={false}/>
              <Slide products={products} title ="Season's Top picks"  timer ={false}/>
              <Slide products ={products} title ="Top Deals on Accessories" timer = {false}/>          
           </Box>
           
        </>
       
    )
}

export default Home;