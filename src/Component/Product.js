import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./product.css"
import { setProducts } from "../redux/actions/productActions"
import ItemCard from './ItemCard';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './Cart';

const Product = () => {

    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()


    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log("Products", products)

    return (
        <>
            <div className='product-container'>
                <ItemCard />
            </div>
        </>
    )
}

export default Product