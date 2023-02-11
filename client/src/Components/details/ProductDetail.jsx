import { LocalOffer as Badge } from "@mui/icons-material";
import { Box, Typography ,styled , Table, TableRow ,TableBody, TableCell} from "@mui/material";







const SmallText = styled(Box)`
font-Size :14px;
vertical-align:baseline;
&>p {
     font-Size:14px;
     margin-top:10px;
}
`
;

const StyledBadge = styled(Badge)`
 margin-right :10px;
 color: #00CC00;
 font-Size:15px;

`
;
const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
&>td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`

const ProductDetail =({product}) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

   const date = new Date(new Date().getTime()+(5*24*60*60*1000))
 
    return( <>
     <Typography style ={{marginLeft:'20px'}}>{product.title.longTitle}</Typography>
        <Typography style ={{marginLeft:'20px',  color: '#878787' ,fontSize:"14px"}}>
        8 Ratings & 1 Reviews
        <Box component="span"><img src={fassured} alt = "assuredImage"  style ={{width:'77px' ,marginLeft:10, marginTop:'3px'}}/></Box>
        </Typography>
     <Typography style ={{marginLeft:'20px'}}>
            <Box component="span" style ={{fontSize:'28px'}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style ={{color:"#878787"}}>₹<strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style ={{color:"#388E3C"}}>{product.price.discount}</Box>
      </Typography>
      <Typography style ={{marginLeft:'20px'}}>Available Offers</Typography>
      <SmallText style ={{marginLeft:'20px'}}>
        <Typography><StyledBadge /> Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
        <Typography><StyledBadge/>Special Price Get extra 3% off (price inclusive of cashback/coupon) T&C</Typography>
        <Typography><StyledBadge/>Partner Offer Buy this product and get upto ₹500 off on Flipkart Furniture Know More</Typography>
        <Typography><StyledBadge/>Partner Offer Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹250* Know More</Typography>
        <Typography><StyledBadge /> No cost EMI ₹5,125/month. Standard EMI also available View Plans</Typography>
      </SmallText>
      <Table style={{marginLeft:'20px'}}>
            <TableBody>
                 <ColumnText>
                     <TableCell style={{color:"#878787"}}>Delivery</TableCell>
                     <TableCell style={{fontWeight:'600'}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                 </ColumnText>
                 <ColumnText>
                     <TableCell style={{color:"#878787"}}>Warranty</TableCell>
                     <TableCell>No Warranty</TableCell>
                 </ColumnText>
                 <ColumnText>
                     <TableCell style={{color:"#878787"}}>Seller</TableCell>
                     <TableCell >
                         <Box component ="span" style ={{color:'#2874f0'}}>SuperComNet</Box>
                         <Typography>GST invoice available</Typography>
                         <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                     </TableCell>
                 </ColumnText>
                 <ColumnText >
                    <TableCell colSpan={2}>
                       <img src = {adURL} style={{width:'390px'}} alt ="flipkartCoins" />
                    </TableCell>
                 </ColumnText>
                 <ColumnText>
                      <TableCell style ={{color:'#878787'}}>Description</TableCell>
                      <TableCell>{product.description}</TableCell>
                 </ColumnText>
            </TableBody>
      </Table>
    </>
    )
}

export default ProductDetail;