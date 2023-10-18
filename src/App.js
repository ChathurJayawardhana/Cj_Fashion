import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeLayout from './layout/home/HomeLayout';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import AllItemLayout from './layout/allitems/AllItemLayout';
import DressesLayout from './layout/dresses/DressesLayout';
import CartLayout from './layout/cart/CartLayout';
import SeasanalLayout from './layout/seasanal/SeasanalLayout';
import DenimsLayout from './layout/denims/DenimsLayout';
import TshirtLayout from './layout/tshirt/TshirtLayout';
import TopsLayout from './layout/tops/TopsLayout';
import Learnlayout from './layout/layoutlearning/Learnlayout';
import HeaderLayout from './layout/common/HeaderLayout';
import FooterLayout from './layout/common/FooterLayout';
import ProductDetails from './layout/productdetails/ProductDetails';

//test comment
//coment 2
function App() {
  return (
   
    <Router>
         <div className="App">
        
          <Routes>
            <Route path='/' element={<HomeLayout/>}/>
            <Route path='/all-items' element={<AllItemLayout/>}/>
            <Route path='/dresses' element={<DressesLayout/>}/>
            <Route path='/cart' element={<CartLayout/>}/>
            <Route path='/seasosanal' element={<SeasanalLayout/>}/>
            <Route path='/denims' element={<DenimsLayout/>}/>
            <Route path='/tshirts' element={<TshirtLayout/>}/>
            <Route path='/tops' element={<TopsLayout/>}/>
            <Route path='/learn' element={<Learnlayout/>}/>
            <Route path='/details' element={<ProductDetails/>}/>

          </Routes>

       
   
    </div>

    </Router>
    
  );
}

export default App;
