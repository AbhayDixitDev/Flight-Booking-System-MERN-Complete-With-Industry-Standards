import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Registration'
import AdminLayout from './components/adminComponent/AdminLayout'
import UserLayout from './components/userComponent/UserLayout'
import BookingHistory from './pages/adminPages/BookingHistory'
import ForgetPassword from './pages/adminPages/ForgetPassword'
import AddFlight from './pages/adminPages/AddFlights'
import AddAirline from './pages/adminPages/AddAirlines'
import AddAirport from './pages/adminPages/AddCity'
import SearchFlight from './pages/userPages/SearchFlight'
import BookFlight from './pages/userPages/BookFlight'
import MyBookings from './pages/userPages/MyBookings'
import ChangePassword from './pages/userPages/ChangePassword'
const App = () => {
 const userType = localStorage.getItem("userType")
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/admin" element={userType === "admin" ? <AdminLayout/> : <Login/>}>
    <Route index element={<BookingHistory/>}></Route>
    <Route path="bookingHistory" element={<BookingHistory/>} />
    <Route path="changePassword" element={<ForgetPassword/>} />
    <Route path="addFlight" element={<AddFlight/>} />
    <Route path="addAirline" element={<AddAirline/>} />
    <Route path="addAirport" element={<AddAirport/>} />
    </Route>
    <Route path="/user" element={userType === "user" ? <UserLayout/> : <Login/>}> 
    <Route index element={<SearchFlight/>} />
    <Route path="searchFlight" element={<SearchFlight/>} />
    <Route path="bookFlight" element={<BookFlight/>} />
    <Route path="myBookings" element={<MyBookings/>} />
    <Route path="changePassword" element={<ChangePassword/>} />

    </Route>


    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App