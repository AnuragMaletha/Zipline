import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About';
import Contact from './pages/Contact/Contact'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';  

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Home/>} />   
        <Route path="/about" element={<About />} />    
        <Route path="/contact" element={<Contact />} />  

      </Routes>
          
          
    </Router>
  )
}

export default App
