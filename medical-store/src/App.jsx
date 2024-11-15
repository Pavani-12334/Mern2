import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Medicine from './pages/Medicine'
import WebLayout from './layout/WebLayout'


const App = () => {
  return (
    <>
<BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                       
                      
                      </Route>
                        </Routes>
            </BrowserRouter>
        </>
 
 
 
  )
}

export default App