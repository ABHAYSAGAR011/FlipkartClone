import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions/productAction";
import { useParams } from "react-router-dom";
import { Box, Grid ,styled } from "@mui/material";
import ActionItems from "./ActionItem";
import ProductDetail from "./ProductDetail";


const Component = styled(Box)`
background: #F2F2F2;
margin-top :55px
`
;

const Container = styled(Grid)(({theme})=>({

    background:'#ffffff',
    display: 'flex',
    [theme.breakpoints.down('md')]:{
        margin:'0px'
    }
}))



;
const RightContainer= styled(Grid) `
margin-top :50px
`


const DetailView =()=>{

    const dispatch = useDispatch();
     const {id} = useParams();
    const {loading , product} = useSelector(state=> state.getProductDetail)
    
    useEffect(() =>{
        if(product && id !== product.id)
           dispatch(getProductDetail(id))
         },[dispatch,id,loading , product])
         
    console.log(product)
    return(
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md ={4} sm={8} xs={12}>
                     <ActionItems  product ={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm ={8} xs={12}>
                    
                       <ProductDetail product ={product} />
                    </RightContainer>

                </Container>
            }
        </Component>
    )
}

export default DetailView;