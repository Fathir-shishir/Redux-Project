import React from 'react';
import { add,remove } from '../Store/cartSlice';
import { useDispatch  } from 'react-redux';


const Product = ({product}) => {
    const dispatch = useDispatch()

    const handleAdd =(product)=>{
        dispatch(add(product))
    }

    return (
        <div class=" lg:w-full card  bg-base-100 shadow-xl">
        <figure><img className='w-1/2 h-60' src={product.image} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
          {product.title}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
      <button onClick={()=> handleAdd(product)} class="btn btn-primary">Add to Cart</button>
    </div>
        </div>
      </div>
    );
};

export default Product;