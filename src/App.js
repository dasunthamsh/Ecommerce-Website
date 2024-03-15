
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import ForestAdventure from "./Pages/Adventure/ForestAdventure";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/forestadventure' element={<ForestAdventure/>}/>


            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
