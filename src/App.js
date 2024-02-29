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
import Footer from "./Components/Footer/Footer";
import men_banner from "./Assets/banner_mens.png"
import kids_banner from "./Assets/banner_kids.png"
import women_banner from "./Assets/banner_women.png"

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />}/>
                <Route path='/womens' element={<ShopCategory banner={women_banner} category="wmens" />}/>
                <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />}/>
                <Route path='/product' element={<Product/>}/>
                <Route path=':productId' element={<Product/>}>
                </Route>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/login' element={<LoginSignup/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
