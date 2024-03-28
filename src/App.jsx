import './App.css'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Home } from './Components/Home'
import { AboutUs } from './Components/AboutUs'
import { Contact } from './Components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
