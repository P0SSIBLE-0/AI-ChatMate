// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="mt-16 text-center py-8 w-full">
      <p className="text-gray-400">Powered by Gemini</p>
      <p className="text-gray-400 mt-2">© 2024 chatmate. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
        <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
        <a href="#" className="text-purple-600 hover:underline">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
