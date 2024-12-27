import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        {/* <Route index element={<Login/>}/> */}
        {/* <Route path="/home" element={<Home/>}/> */}

        
        </Route>
        
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App