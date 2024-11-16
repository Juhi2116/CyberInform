import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import SignIn from './Pages/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute';
import Language from './Components/Language';
import InterviewInterface from './Components/Interview';
import Practice from './Components/Practice';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
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
