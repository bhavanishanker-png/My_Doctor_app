
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/NavBar';
import ProtectedRoute from './Components/ProtectedRoute';
import PaymentPage from './Components/PaymentPage';
import ConfirmationPage from './Components/ConfirmationPage';
// Pages
import About from './pages/About';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import SignupPage from './pages/SignUp';

// Load Stripe with your publishable key
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Routes */}
          <Route
            path="/my-profile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointment/:doctId"
            element={
              <ProtectedRoute>
                <Appointment />
              </ProtectedRoute>
            }


            
          />
          <Route
            path="/my-appointments"
            element={
              <ProtectedRoute>
                <MyAppointments />
              </ProtectedRoute>
            }
          />
          <Route path="/payment/:doctId/:slotTime" element={<PaymentPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          {/* Wrap PaymentPage in Elements provider */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
