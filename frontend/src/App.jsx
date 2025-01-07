import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Registration'
import AdminLayout from './components/adminComponent/AdminLayout'
import UserLayout from './components/userComponent/UserLayout'

const App = () => {
 const userType = localStorage.getItem("userType")
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/admin" element={userType === "admin" ? <AdminLayout/> : <Login/>}/>
    <Route path="/user" element={userType === "user" ? <UserLayout/> : <Login/>}/>


    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App