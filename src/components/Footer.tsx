import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  // MessageSquare,
  // AtSign,
} from "lucide-react";
import logo from '../assets/JAYESH-1 (1)-Picsart-BackgroundRemover.png'
import { RiThreadsFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Ring Rolling", href: "/services#ring-rolling" },
    { name: "Skew Press Forging", href: "/services#skew-press" },
    { name: "Friction Forging", href: "/services#friction" },
    { name: "Hammer Forging", href: "/services#hammer" },
    { name: "Quality Control", href: "/services#quality" },
  ];

  const products = [
    { name: "SS304 Rings", href: "/products#ss304" },
    { name: "SS316 Rings", href: "/products#ss316" },
    { name: "Automotive Bushings", href: "/products#bushings" },
    { name: "Gears & Components", href: "/products#gears" },
  ];

  const certifications = [
    "MSME Certified",
    "Export Quality",
    "Industry Standard",
    "Quality Assured",
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Jayesh Forge Logo"
                style={{
                  height: "50px",
                  width: "auto",
                }}
              />
              <span className="text-white text-xl font-bold">Jayesh Forge</span>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              Serving automotive, industrial, and custom sectors with
              high-performance forged components.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">+91 94265 11161</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">jayeshforge@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">
                  Pan Business Park Gate,Shapar (Veraval), Rajkot,Gujarat, India
                  – 360024
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/jayesh_forge/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Jayesh-Forge/61572264366988/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919426511161"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-300"
              >
                <BsWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://www.threads.com/@jayesh_forge" // Replace with your actual Threads URL
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-300"
              >
                <RiThreadsFill className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Certifications */}
          <div>
            <h4 className="text-xl font-bold mb-6">Products</h4>
            <ul className="space-y-3 mb-8">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>

            <h5 className="text-lg font-bold mb-4">Certifications</h5>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Jayesh Forge. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
