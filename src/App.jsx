import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import AddProductForm from './productComponent/AddProductForm'
import AddCategoryForm from './productComponent/AddCategoryForm'
import Product from './pages/Product'
import UserLoginForm from './userComponent/UserLoginForm'
import AdminLoginPage from './userComponent/AdminLoginPage'
import AddDeliveryPerson from './userComponent/AddDeliveryPerson'
import DeliveryPersonLogin from './userComponent/DeliveryPersonLogin'
import MyCart from './userComponent/MyCart'
import AddCardDetails from './pages/AddCardDetails'
import MyOrder from './userComponent/MyOrder'
import AllOrders from './userComponent/AllOrders'
import SearchOrder from './userComponent/SearchOrder'
import AssignDeliveryToOrders from './userComponent/AssignDeliveryToOrders'
import MyDeliveries from './userComponent/MyDeliveries'
import AddUserForm from './userComponent/AddUserForm'
import ForgetPassword from './userComponent/ForgetPassword'
import UserOtpVerification from './userComponent/UserOtpVerification'
import ForgetPassOtpVerification from './userComponent/ForgetPassOtpVerification'
import Header from './pages/Header'
import AdminDashboardPage from './pages/AdminDashboard'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
       <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/product/categories" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="addproduct" element={<AddProductForm />} />
        <Route path="addcategory" element={<AddCategoryForm />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/admin/login" element={<AdminLoginPage />} />
        <Route path="/user/deliveryperson/register" element={<AddDeliveryPerson />}/>
        <Route path="/user/deliveryperson/login" element={<DeliveryPersonLogin />}/>
        <Route path="/home/product/category/:categoryId/:categoryName" element={<HomePage />}/>
        <Route path="/product/:productId/category/:categoryId" element={<Product />} />
        <Route path="/user/mycart" element={<MyCart />}/>
        <Route path="/user/order/payment" element={<AddCardDetails />}/>
        <Route path="/user/myorder" element={<MyOrder />}/>
        <Route path="/user/admin/allorder" element={<AllOrders />}/>
        <Route path="/user/admin/searchOrder" element={<SearchOrder />}/>
        <Route path="/user/admin/assigndelivery" element={<AssignDeliveryToOrders />}/>
        <Route path="/user/delivery/myorders" element={<MyDeliveries />}/>
        <Route path="/user/customer/register" element={<AddUserForm/>}/>
        <Route path="/user/admin/register" element={<AddUserForm />}/>
        <Route path="/user/delivery/register" element={<AddUserForm />}/>
        <Route path="/user/forget-password" element={<ForgetPassword />}/>
        <Route path="/user/verify/register" element={<UserOtpVerification />}/>
        <Route path="/user/verify/forget"  element={<ForgetPassOtpVerification />}/>
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      </Routes>
      
    </>
  )
}

export default App