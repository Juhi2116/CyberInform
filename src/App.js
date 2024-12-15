import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import SignIn from './Pages/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Pages/Products';
import ContactUs from './Pages/ContactUs';
import Solutions from './Pages/Solutions';
import Interview from './Pages/Interview';
import PricingPage from './Pages/Pricing';
import Partner from './Pages/Partner';
import Releases from './Pages/Releases';
import Resourcelib from './Pages/Resourcelib';
import Resourceblog from './Pages/Resourceblog';
import CardWithForm from './Pages/Card';
import Assessment from './Pages/Assessment';
import Questions from './Pages/Questions';
import Anouncement from './Components/Anouncement';


function App() {
  return (
    <div className='overflow-x-hidden'>
      <Router>
        <Anouncement/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/resource-library" element={<Resourcelib />} />
          <Route path="/resource" element={<Resourceblog />} />
          <Route path="/resource-partner" element={<Partner />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/featured-post" element={<CardWithForm />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/real-world-questions" element={<Questions />} />

          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<SignIn />} />
          {/* <Route path="/" element={<ProtectedRoute element={<Home/>} />} /> */}
          {/* <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} /> */}
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
