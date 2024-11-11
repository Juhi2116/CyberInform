import React from 'react';
import { Link } from 'react-router-dom'

function SignUpPage() {

  return (
    <div className="min-h-screen bg-blue-600 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex">
        
        {/* Left side: Logo, welcome message, and banner */}
        <div className="w-1/2 p-6 flex flex-col items-center justify-center space-y-4 bg-white">
          <img src="../logo.svg" alt="Cyberinfomines Logo" className="w-32 mb-4" />
          <h2 className="text-blue-600 text-xl font-bold">Welcome to</h2>
          <h1 className="text-blue-600 text-3xl font-bold">Cyberinfomines</h1>
          <img src="../Frame 39568.png" alt="Banner" className="mt-4" />
        </div>

        {/* Right side: Sign-up form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="userId" className="block text-gray-700">User ID</label>
              <input
                type="text"
                id="userId"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <p className="text-xs text-gray-600 mt-1">
                * Use 8 or more characters, with at least one uppercase letter, one lowercase letter, one number, and one special character.
              </p>
            </div>

            <div className="mb-4 flex items-center">
              <input type="checkbox" id="marketing" className="mr-2" />
              <label htmlFor="marketing" className="text-gray-700 text-sm">
                I want to receive emails about the product, feature updates, events, and marketing promotions.
              </label>
            </div>

            {/* Terms of Use and Privacy Policy */}
            <p className="text-xs text-gray-700 mb-4">
              By creating an account, you agree to the <a href="#" className="text-blue-600">Terms of use</a> and <a href="#" className="text-blue-600">Privacy Policy</a>.
            </p>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Create An Account
            </button>

            <p className="text-center text-gray-700 mt-4">
             Already Have a Account? <a href="#" className="text-blue-600">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
