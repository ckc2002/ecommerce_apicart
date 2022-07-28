import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Component/Menubar';
import { Routes, Route } from "react-router-dom"
import Product from './Component/Product';
import Cart from './Component/Cart'
import ProductDetails from './Component/ProductDetails';



function App() {
  return (
    <>
      <Menubar />
      <Routes >
        <Route path='/' element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
