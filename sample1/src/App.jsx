import React from 'react'
import './assets/css/style.css'
import Page from './page/Page'
import Projects from './page/Projects'
import Contact from './page/contact'
import NavBar from './Components/NavBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page/>} />
      <Route path='Project' element={<Projects/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
