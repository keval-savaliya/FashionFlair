import './App.css';
import Home from './screen/Home';
import Login from './screen/Login.js';
import { useEffect, useState } from 'react';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './screen/Signup.js';
import DetailCategory from './screen/DetailCategory.js';
import { CartProvider } from './components/ContextReducer.js';
import DetailDress from './screen/DetailDress.js'
import HeroSection from './screen/HeroSection.js';
import DetailOneItem from './screen/DetailOneItem'
import Cart from './screen/Cart'
import About from './screen/About.js';
import CreateCategory from './screen/Admin/CreateCategory.js';
import CreateProduct from './screen/Admin/CreateProduct.js';
import PrivateRoute from './components/PrivateRoute.js';
import AdminHome from './screen/Admin/AdminHome.js';
import GetAllCategory from './screen/Admin/GetAllCategory.js';
import GetAllProduct from './screen/Admin/GetAllProduct.js';
import GetAllCustomerReview from './screen/Admin/GetAllCustomerReview.js';
import EditProduct from './screen/Admin/EditProduct.js';
import PrivateUserRoute from './components/PrivateUserRoute.js';
import GetUsers from './screen/Admin/GetUsers.js';
import Address from './screen/Address.js';
import EditCategory from './screen/Admin/EditCategory.js';
//ek minute call chalu chhe
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route element={<PrivateUserRoute/>}> */}
            <Route path='/cart' element={<Cart />} />
          <Route path='/address' element={<Address />} />
          {/* </Route> */}
          <Route path='/' element={<HeroSection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<Signup />} />
          <Route path='/:id' element={<DetailCategory />} />
          <Route path='/:id/:id' element={<DetailOneItem />} />
          <Route element={<PrivateRoute />}>
            <Route path='/admin-home' element={<AdminHome/>} />
            <Route path='/admin-home/getreview' element={<GetAllCustomerReview />} />
            <Route path='/admin-home/allcategory' element={<GetAllCategory />} />
            <Route path='/admin-home/allproduct' element={<GetAllProduct />} />
            <Route path='/admin-home/getUsers' element={<GetUsers />} />
            <Route path='/create-product' element={<CreateProduct />} />
            <Route path='/create-category' element={<CreateCategory />} />
            <Route path='/edit-product/:productId' element={<EditProduct/>} />
            <Route path='/edit-category/:catId' element={<EditCategory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
