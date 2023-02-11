import {InputBase ,Box,List ,ListItem, styled} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import "./Styles.css"
import { useState ,useEffect} from "react"
import { useSelector , useDispatch } from "react-redux"
import { getProducts } from "../../redux/actions/productAction"
import {Link} from 'react-router-dom';


const ListWrapper = styled(List)
`
position :absolute;
background : #FFFFFF;
color : #000;
margin-top:36px
`


const Search = () => {

    const [text , setText] = useState('')
    const {products} = useSelector(state => state.getProducts)
   
    const dispatch = useDispatch('')
    useEffect(() =>{
       dispatch(getProducts())
   },[dispatch])
const getText =(text) =>{
     setText(text);

}

    return (
        <Box className ="SearchContainer">
            <InputBase  className="InputSearch"
                placeholder="Search for products,brands and more"
               onChange={(e) => getText(e.target.value)}
               value = {text}
            />
            <Box className="SearchIcon">
              <SearchIcon  />
            </Box>
            {
                text &&
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                   <Link
                                   to ={`/product/${product.id}`}
                                   onClick ={() => setText('')}
                                   style = {{textDecoration :'none' ,color:'inherit'}}
                                   >
                                      {product.title.longTitle}
                                   </Link>
                                 
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </Box>
    )
}
export default Search;