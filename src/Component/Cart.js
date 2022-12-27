

import { Button, Col, Container, Row ,Table , Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'; 
import {removeFromCart,clearCart} from '../rtk/slices/cart-slice';
import product from './Products';



function Cart () {
  const cart = useSelector(state=> state.cart);
  const  dispatch = useDispatch ()
  const totalPrice = cart.reduce((acc,product)=>{acc += product.price * product.quantity;
  return acc; }, 0)
  return (
    <Container className='py-5'>
    <h1 className='py-5'> Welcome to Cart
    </h1>
    
      <Table striped bordered hover variant="dark" className='py-5' >
      <thead>
        <tr >
          <th>N</th>
          <th>title</th>
          <th>image</th>
          <th>price</th>
          <th>quantity</th>
          <th>action</th>
         
        </tr>
      </thead>
      <tbody>
      {cart.map((product)=>(
          <tr key={product.id} >
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><Image src={product.image} alt={product.title} style={{width:'100px' , height:'100px'}} /></td>
          <td>{product.price} $ </td>
          <td>{product.quantity}</td>
          <td><Button variant='danger' onClick={()=>dispatch(removeFromCart(product))}>Delete</Button></td>
         
        </tr>
        ))};

        
      </tbody>
    </Table>

    {/* <h4 className= 'mb-5'> Total price : {totalPrice.toFixed(2)} </h4> */}

    <Table striped bordered hover variant="dark" className='py-5' >
      <thead>
        <tr >
          
          <th><h4>Total Price</h4> </th>
      
        </tr>
      </thead>
      <tbody>
      
        <tr key={product.id} >
          <td><h4>{totalPrice.toFixed(2)} $</h4> </td>
         
        </tr>
        ;

        
      </tbody>
    </Table>

    <Button variant='warning' className='mb-5'  onClick={()=> dispatch(clearCart())}> Clear all products </Button>
        
    </Container>
    
  );
}

export default Cart;