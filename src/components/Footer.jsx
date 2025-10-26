import React from 'react';
import { SlSocialInstagram , SlSocialTwitter ,SlSocialFacebook } from "react-icons/sl";



export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Meditation App</h3>
            <p className="text-slate-300">
              Discover inner peace and mindfulness through guided meditation. Start your journey to a calmer mind today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors"><SlSocialFacebook /> Facebook</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors"><SlSocialTwitter /> Twitter</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors"><SlSocialInstagram /> Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">&copy; 2025 Meditation App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
