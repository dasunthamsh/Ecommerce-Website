import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shop from "./Pges/Shop";
import ShopCategory from "./Pges/ShopCategory";
import product from "./Pges/Product";
import Product from "./Pges/Product";
import LoginSignup from "./Pges/LoginSignup";
import Cart from "./Pges/Cart";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/mens' element={<ShopCategory category="mens" />}/>
                <Route path='/womens' element={<ShopCategory category="wmens" />}/>
                <Route path='/kids' element={<ShopCategory category="kids" />}/>
                <Route path='/product' element={<Product/>}/>
                <Route path=':productId' element={<Product/>}>
                </Route>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/login' element={<LoginSignup/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
