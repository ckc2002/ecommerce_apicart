import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./cart.css"
import { adjustQty, removeFromCart } from "../redux/actions/productActions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

  const product = useSelector((state) => state.allProducts.cart)
  const { id, image, title, price, category, description } = product;
  const dispatch = useDispatch()

  let totalPrice = 0;

  const incQty = (e) => {
    dispatch(adjustQty(e.id, e.qty + 1))
    console.log(e.id, e.qty);
  }

  const decQty = (e) => {
    dispatch(adjustQty(e.id, e.qty - 1))
  }

  const removeCart = (e) => {
    dispatch(removeFromCart(e.id))
  }

  const notify = () => toast.success('Item is Remove', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <>
      <div className="cart-container">
        <h3>Item in the Cart</h3>
        {Object.keys(product).length === 0 ? (
          <div>Cart is Empty</div>
        ) :
          (<div className="cart-subcontainer"  style={{ display: "flex" }}>
            <div style={{ background: "#cfcfcf" }}>
              {
                product.map((product) => {
                  const { id, image, title, price, category, description, qty } = product;
                  totalPrice = totalPrice + price
                  return (

                    <div className="cart-box">
                      <div className="product-cart-conatiner">
                        <div className="product-img">
                          <img src={image} alt="" />
                        </div>
                        <div className="product-name">
                          <h3>{title}</h3>
                        </div>
                        <div className="cart-product-price">
                          <p><i class="price-icon fa-solid fa-indian-rupee-sign"></i>  {price}</p>
                        </div>
                        <div className="quantity">
                          <div className="counter">
                            <button onClick={() => decQty(product)} className='counter-btn dec-counter-btn'>-</button>
                            <p>{qty}</p>
                            <button onClick={() => incQty(product)} className='counter-btn inc-counter-btn'>+</button>
                          </div>
                        </div>
                        <div onClick={() => {
                          removeCart(product)
                          notify()
                        }} className="remove-product">
                          <i class="icon-remove fa-solid fa-trash"></i>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="total-price" style={{ width: "195px",  padding: "15px 15px" }     
}>
              <span style={{ fontWeight: "bold" }}>Total Price</span>
              <span>  {totalPrice}</span>
            </div>
          </div>)
        }
      </div>
      <ToastContainer />
    </>
  )
}

export default Cart