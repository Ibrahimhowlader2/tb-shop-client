import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products/Products';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Cart from './Pages/Cart/Cart';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>

          <Route path="/home" element={<Home />}/>

          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
