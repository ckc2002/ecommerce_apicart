import { render } from '@testing-library/react';
import React, { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../redux/actions/productActions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCard = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()

    const addCart = (e) => {
        dispatch(addToCart(e))
    }

    const notify = () => toast("Item is Added to Cart");

    return (
        <>
            {products.map((product) => {
                const item = product
                const { id, title, image, price, description, category } = product;

                return (
                    <Card className='product-card'>
                        <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: "black" }} >
                            <Card.Img className='card-img' variant="top" src={image} />
                            <Card.Body>
                                <h3 className='product-heading'>{title}</h3>
                                <div className='sub-section'>
                                    <h3 className='product-price'>Price</h3>
                                    <h3 className='product-price'><i class="price-icon fa-solid fa-indian-rupee-sign"></i>  {price}</h3>
                                </div>
                                <Card.Text>{category}</Card.Text>
                            </Card.Body>
                        </Link>
                        <Button onClick={() => {
                            addCart(product)
                            notify()
                        }
                        } variant="primary" className="addbtn">Add Cart</Button>
                    </Card>
                )
            })}
            <ToastContainer />
        </>
    )
}

export default ItemCard