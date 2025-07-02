import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/JAYESH-1 (1)-Picsart-BackgroundRemover.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-black/95 backdrop-blur-sm border-b border-orange-500/20 fixed top-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Jayesh Forge Logo"
                style={{ height: "85px", width: "auto" }}
              />
              <span className="text-white text-2xl font-bold">
                Jayesh Forge
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-orange-500"
                      : "text-white hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              to="/contact"
              className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 transition-colors duration-300 ${
                      isActive(item.href)
                        ? "text-orange-500"
                        : "text-white hover:text-orange-500"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
