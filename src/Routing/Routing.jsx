import React from 'react'
import './routing.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import RegForm from '../Component/Registration/RegForm'
import Home from '../Component/Home/Home'
import Header from '../Layout/Header'
import LogIn from '../Component/Log In/LogIn'
import Products from '../Component/Product/Products'
import Test from '../Component/Test/Test'
const Routing = () => {
    return (
        <div className='routingContainer'>
            <Router>
                <Header />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="reg_form" element={<RegForm />} />
                    <Route path="login_form" element={<LogIn />} />
                    <Route path="product_page" element={<Products />} />
                    <Route path="test_page" element={<Test/>} />


                </Routes>
            </Router>
        </div>
    )
}

export default Routing