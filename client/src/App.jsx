import React from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register  from './pages/register/Register'
import Products from './pages/products/Products'
import Final from './pages/final/Final'

const App = () => {
    const user = false;
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login'  element = { user ? <Home/> : <Login/>}/>
            <Route path='/register'  element = { user ? <Home/> : <Register/>}/>
            <Route path='/product' element = {<Products/>}/>
            <Route path='/final' element = {<Final/>}/>
        </Routes> 
    </Router>



  )
}

export default App