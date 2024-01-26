
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Shop from './pages/shop';
// import Product from './pages/product';
import Cart from './pages/cart/cart';
import ShopContextProvider from './context/shop-context';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      
        <Navbar></Navbar>
        
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
   
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
