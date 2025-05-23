import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Services', path: '/services' },
    {name:'Privacy Policy', path: '/privacy'}

  ];

  const serviceLinks = [
    { name: 'Tours', path: '/services' },
    { name: 'Airport Transfer', path: '/services' },
    { name: 'Corporate Services', path: '/services' },
    { name: 'Event Transport', path: '/services' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <Link to="/" className="block">
            <h3 className="text-xl font-bold mb-3">Stallions Limousine</h3>
          </Link>
          <p className="text-gray-400 text-sm">
            Premium Car Chauffeur Services for those who appreciate quality and comfort.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
           
           
            <li>info@stallionsls.com</li>
            <li>1-888-719-5750</li>
            
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-800">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Stallion. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;