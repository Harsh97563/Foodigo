
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/index.tsx'
import Navbar from './components/navbar.tsx'
import AboutUs from './pages/AboutUs/index.tsx'
import Footer from './components/footer.tsx'
import Reservation from './pages/Reservation/index.tsx'
import ContactUs from './pages/ContactUs/index.tsx'
import Menu from './pages/Menu/index.tsx'
import Order from './pages/Order/index.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path={"/"} element={<Dashboard/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/order' element={<Order/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
