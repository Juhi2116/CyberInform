import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authAPI } from '../api/authAPI';

function SignIn() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // const username = document.getElementById("username").value;
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const credentials = { email, password };
    console.log("Login form submitted");

    console.log(credentials);


    try {
      const response = await authAPI.login(credentials);
      localStorage.setItem('token', response.accessToken); // Save token to localStorage
      navigate(-1);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-blue-600 flex justify-center items-center">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left side: Logo, welcome message, and banner */}
        <div className="w-1/2 p-8 flex flex-col items-center justify-center space-y-4 bg-blue-50">
          <img src="../logo.svg" alt="Cyberinfomines Logo" className="w-32 mb-4" />
          <h2 className="text-blue-600 text-xl font-bold">Welcome to</h2>
          <h1 className="text-blue-600 text-3xl font-bold">Cyberinfomines</h1>
          <img src="../Frame 39568.png" alt="Banner" className="mt-4" />
        </div>

        {/* Right side: Sign-in form */}
        <div className="w-1/2 p-8 space-y-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="sr-only">
                Username or Email
              </label>
              <input
                type="text"
                id="username"
                required={true}
                placeholder="User name or email address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                required={true}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="flex justify-left">
              <Link to="/forget-password" className="text-sm text-blue-500 hover:underline">
                Forgot Your Password?
              </Link>
            </div>
            {/*<button type="submit"*/}
            {/*        className="mt-2 w-fit pl-4 pr-4 px-2 py-2  text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">*/}
            {/*  Sign In*/}
            {/*</button>*/}

            {/*alternative button*/}
            <button
                type="submit"
                className="mt-2 w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign In
            </button>
          </form>
          
          <div className="flex items-center justify-center space-x-4">
            <span className="w-full h-px bg-gray-300"></span>
            <span className="text-gray-500">OR</span>
            <span className="w-full h-px bg-gray-300"></span>
          </div>

          <div className="flex items-center justify-center space-x-4">
          <button className="flex items-center justify-center w-16 h-16  border-gray-300 rounded-lg">
              <img src="../img.png" alt="x Logo" className="w-16 h-16"/>
            </button>
            <button className="flex items-center justify-center w-16 h-16  border-gray-300 rounded-lg">
              <img src="../img1.png" alt="Google Logo" className="w-16 h-16"/>
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600">Don’t Have an Account? </span>
            <Link to="/signup" className="text-sm text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
