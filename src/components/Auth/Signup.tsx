"use client";

import React, { useState } from 'react';
import { Mail, User, Lock, ArrowRight, Info } from 'lucide-react';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    // Main container with a two-column layout on medium screens and up.
    <div className="flex flex-col md:flex-row min-h-screen font-inter">
      
      {/* Left Column - Design Section */}
      <div className="relative md:w-1/2 bg-gradient-to-r from-[#21213D] to-[#51369E] text-white p-8 hidden md:flex flex-col justify-end">
        {/* Logo and title */}
        <div className="absolute top-8 left-8 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hexagon text-white"><path d="M12.515 2.158a1 1 0 0 0-1.03 0L3.158 6.708a1 1 0 0 0-.515.895v8.794a1 1 0 0 0 .515.895l8.327 4.55a1 1 0 0 0 1.03 0l8.327-4.55a1 1 0 0 0 .515-.895V7.603a1 1 0 0 0-.515-.895z"/></svg>
          <span className="text-2xl font-bold">FOXHUB</span>
        </div>
        
        {/* Placeholder for the handshake image. Using a radial gradient for a similar visual effect. */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://placehold.co/800x600/21213D/51369E?text=Partnership')", backgroundSize: '70% auto' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#21213D]/90 to-transparent"></div>
        </div>

        {/* Text content for the left column */}
        <div className="relative z-10 p-4">
          <h2 className="text-4xl font-semibold mb-4">Partnership for Business Growth</h2>
          <p className="text-sm font-light leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      
      {/* Right Column - Form Section */}
      <div className="flex flex-col items-center justify-center p-8 md:w-1/2 bg-gray-50">
        
        {/* Top navigation links for larger screens */}
        <div className="w-full max-w-xl hidden md:flex justify-between items-center mb-8">
          <a href="#" className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors">
            <ArrowRight className="h-4 w-4 transform rotate-180 mr-1" />
            Return Home
          </a>
          <span className="text-sm text-gray-500">
            Already a Member? <a href="#" className="font-semibold text-indigo-600 hover:underline">LOG IN NOW</a>
          </span>
        </div>
        
        {/* Main form card */}
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-gray-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">BECOME AN EXCLUSIVE MEMBERS</h1>
            <p className="text-sm text-gray-500 mt-2">SIGN UP AND JOIN THE PARTNERSHIP</p>
          </div>
          
          <form className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Johnson Doe"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#5B468F] text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-[#4a3676] transition-colors"
            >
              Become a Member
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
        
        {/* Footer for large screens */}
        <div className="hidden md:flex flex-col items-center mt-8 w-full max-w-xl text-xs text-gray-500 text-center">
          <p className="mb-2">Copyright 2021 - 2022 FoxHub Inc. All rights Reserved</p>
          <a href="#" className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors">
            <Info className="h-4 w-4 mr-1" />
            Need help?
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
