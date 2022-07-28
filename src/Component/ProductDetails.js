import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct, addToCart } from '../redux/actions/productActions';
import "./productdetails.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch()


    const addCart = () => {
        dispatch(addToCart(product))
    }

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => {
                console.log("Error", err)
            });
        console.log(response.data.id)
        dispatch(selectedProduct(response.data))
    };

    useEffect(() => {
        if (productId && productId != "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        };
    }, [productId])

    console.log(product)

    const notify = () => toast("Item is Added to Cart");


    return (
        <>

            {
                Object.keys(product).length === 0 ? (
                    <div>...Loading</div>
                ) : (
                    <div className="conatiner">
                        <div className="image-section">
                            <img src={image} alt="" />
                        </div>
                        <div className="details-section">
                            <div className="title-section">
                                <h2>{title}</h2>
                            </div>
                            <div className="price-section">
                                <p><i class="price-icon fa-solid fa-indian-rupee-sign"></i> {price}</p>
                            </div>
                            <div className="price-category">
                                <p>{category}</p>
                            </div>
                            <div className="description-section">
                                <p>{description}</p>
                            </div>
                            <div className="add-cart">
                                <button className='add-btn' onClick={() => {
                                    addCart()
                                    notify()
                                }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )}
            <ToastContainer />
        </>
    )
}

export default ProductDetails;