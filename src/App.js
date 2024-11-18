import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import SignIn from './Pages/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Pages/Products';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
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
