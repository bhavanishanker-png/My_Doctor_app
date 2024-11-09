
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import Navbar from './Components/NavBar'
import MyAppointments from './pages/MyAppointments'
import Footer from './Components/Footer'
import SignupPage from './pages/SignUp'
function App() {
  return (
    <div className='mx-4 '>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/doctors" element={<Doctors />}/>
        <Route path="/doctors/:speciality" element={<Doctors />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/my-profile" element={<MyProfile />}/>
        <Route path="/my-appointments" element={<MyAppointments />}/>
        <Route path="/Appointment/:doctId" element={<Appointment />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
