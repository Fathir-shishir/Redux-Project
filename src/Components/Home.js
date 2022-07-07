import React from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import {fetchProducts} from "../Store/ProductSlice"
import Product from './Product';

const Home = () => {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector((state) => state.product);
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    return (
        <div >
            <h1 className='text-center text-xl'> Cart products with redux</h1>
            <h1 className='text-center text-xl'>{products.length}</h1>

            <div className='grid grid-cols-3 justify-items-center gap-3'>
            {
                products.map((product)=> <Product 
                  product ={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Home;