
import axios from 'axios'
import * as actionType from '../constants/cartConstants'

const URL = 'http://localhost:2000'

export const addCart =(id,quantity) => async (dispatch)=>{
  try{
      const {data} = await axios.get(`${URL}/product/${id}`)

      dispatch({type:actionType.ADD_TO_CART , payload:{...data ,quantity}})
  }catch(error){
       dispatch({type:actionType.ADD_TO_CART_ERROR, payload:error.message})
  }

}


export const removeCart=(id) =>(dispatch) =>{
    dispatch({type:actionType.REMOVE_TO_CART, payload:id})

}