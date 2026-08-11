import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MonitorPlay } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MonitorPlay className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">
                Shri Computers <br/><span className="text-primary text-sm">& Multi Services</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Your Trusted Digital Service Center. We provide CSC services, Maha e-Seva, Aadhaar, PAN Card, Online Forms, Printing, and Banking Services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                {/* @ts-ignore - react-icons type issue with react 19 */}
                <FaFacebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                {/* @ts-ignore - react-icons type issue with react 19 */}
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                {/* @ts-ignore - react-icons type issue with react 19 */}
                <FaTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors text-sm">All Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-primary transition-colors text-sm">Pricing & Rates</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Popular Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">Aadhaar Card Update</li>
              <li className="text-gray-300 text-sm">PAN Card Application</li>
              <li className="text-gray-300 text-sm">Online Government Forms</li>
              <li className="text-gray-300 text-sm">Income & Caste Certificates</li>
              <li className="text-gray-300 text-sm">Color Printing & Scanning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-300 text-sm">Bhatkudgaon Phata, Taluka Shevgaon, District Ahilyanagar, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-300 text-sm">+91 83298 22358</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-300 text-sm">mhasrupshriram422@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-300 text-sm">Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Shri Computers & Multi Services. All rights reserved. | CSC ID: 625663450012
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
