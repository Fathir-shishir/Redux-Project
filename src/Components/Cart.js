import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import Product from './Product';
import { remove } from '../Store/cartSlice';
const Cart = () => {
    const dispatch = useDispatch()
    const items = useSelector((state)=> state.cart)
    const handleRemove = (productId)=>{
        dispatch(remove(productId))
    }

    return (
        <div>
        
        <h1 className='text-center text-5xl my-5'>Cart</h1>
        <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    

    {
        items.map((product, index) =>  <tr>
        <td>{index + 1}</td>
        <td>{product.title}</td>
        <td>{product.price}</td>
      
        <td><img className='w-12 h-12' src={product.image} alt="" /></td>
        <td> <button onClick={()=> handleRemove(product.id)} className='btn btn-primary'>Remove</button></td>
      </tr>)
    }

    
      
    
     
    </tbody>
  </table>
</div>
          
        </div>
    );
};

export default Cart;