import { useState, useEffect } from "react";
import { ChevronUp } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on route change
  }, [pathname]);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const socialButtons = [
    {
      icon: FaInstagram,
      label: 'Instagram',
      color: 'from-pink-500 to-orange-500',
      href: 'https://www.instagram.com/jayesh_forge/'
    },
    {
      icon: FaFacebookF,
      label: 'Facebook',
      color: 'from-blue-600 to-blue-700',
      href: 'https://www.facebook.com/people/Jayesh-Forge/61572264366988/'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      color: 'from-green-500 to-green-600',
      href: 'https://wa.me/919426511161'
    },
    {
      icon: HiOutlineMail,
      label: 'Email',
      color: 'from-orange-500 to-orange-600',
      href: 'mailto:jayeshforge@gmail.com'
    },
  ];

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center space-y-4">
          <button
            onClick={scrollToTop}
            className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>

          {socialButtons.map((social, index) => (
            <div key={index} className="group relative">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:rotate-12 hover:scale-110 transition-all duration-500 animate-bounce`}
                style={{ animationDelay: `${index * 0.15}s` }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
              <div className="absolute right-12 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                  {social.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
