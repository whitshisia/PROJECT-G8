import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout'
import Home from './components/Home'
import SignUp from './pages/SignUp'
function App() {
  return (
    <div>
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/home' element={<Home/>}/> 
      <Route path='/signup' element={<SignUp/>}/>     
    </Routes> 
    </BrowserRouter> 

    </div>
    
  )
}

export default App