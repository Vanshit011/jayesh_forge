import React, { FormEvent, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  // MessageSquare,
  // AtSign,
} from "lucide-react";
import { RiThreadsFill } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 94265 11161", "+91 94995 58009"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["jayeshforge@gmail.com", "quotesjayeshforge@gmail.com"],
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Pan Business Park Gate,",
        "Shapar (Veraval), Rajkot,",
        "Gujarat, India – 360024",
      ],
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Regular: 8 AM – 8 PM",
        "Closed: Every Wednesday",
        "24/7 Emergency Available",
      ],
      action: "Emergency Contact",
    },
  ];

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_4oeyvmm',
        'template_e2in7tb',
        form.current,
        'zX9Gwb3bRKafHxDCQ'
      )
      .then(
        (result) => {
          alert('Quote request sent successfully!');
          console.log(result.text);
          form.current?.reset();
        },
        (error) => {
          alert('Failed to send quote.');
          console.error(error);
        }
      );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4">
              Get In <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Our team of experts is here to help
              you find the perfect hot forging solution for your SS304/316 rings
              and automotive component needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-orange-500 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => {
                          if (info.title === "Email") {
                            return (
                              <p key={detailIndex} className="text-gray-600">
                                {detail}
                              </p>
                            );
                          } else if (info.title === "Phone") {
                            return (
                              <p key={detailIndex} className="text-gray-600">
                                {detail}
                              </p>
                            );
                          } else if (info.title === "Location") {
                            return detail;
                          } else {
                            return (
                              <p key={detailIndex} className="text-gray-600">
                                {detail}
                              </p>
                            );
                          }
                        })}

                        {info.title === "Phone" ? (
                          <a
                            href={`tel:${info.details[0].replace(/\s+/g, "")}`}
                            className="text-orange-500 hover:text-orange-600 font-medium mt-2 inline-block transition-colors duration-300"
                          >
                            {info.action}
                          </a>
                        ) : info.title === "Email" ? (
                          <a
                            href={`mailto:${info.details[0]}`}
                            className="text-orange-500 hover:text-orange-600 font-medium mt-2 inline-block transition-colors duration-300"
                          >
                            {info.action}
                          </a>
                        ) : info.title === "Location" ? (
                          <a
                            href="https://www.google.com/maps/dir//Service+Road,+Shapar,+Gujarat+360024/@22.1620464,70.7085538,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3958358909c7ac7f:0xc46ce2bcd015cbe0!2m2!1d70.7909554!2d22.1620671?entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-600 font-medium mt-2 inline-block transition-colors duration-300"
                          >
                            {info.action}
                          </a>
                        ) : (
                          <a
                            href="tel:+919426511161"
                            className="text-orange-500 hover:text-orange-600 font-medium mt-2 inline-block transition-colors duration-300"
                          >
                            {info.action}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-black mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/jayesh_forge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg transition-colors duration-300"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Jayesh-Forge/61572264366988/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg transition-colors duration-300"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://wa.me/919426511161"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg transition-colors duration-300"
                  >
                    <BsWhatsapp className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://www.threads.com/@jayesh_forge" // Replace with your actual Threads URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg transition-colors duration-300"
                  >
                    <RiThreadsFill className="h-6 w-6 text-white" />
                  </a>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  Stay updated with our latest projects and industry insights
                </p>
              </div>

              {/* Emergency Contact */}
              <div className="bg-black p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">
                  24/7 Emergency Service
                </h3>
                <p className="text-gray-300 mb-4">
                  Critical project? Need urgent SS304/316 rings or automotive
                  components? Our emergency response team is available around
                  the clock.
                </p>
                <a
                  href="https://wa.me/919499558009"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full inline-block text-center"
                >
                  Emergency Hotline
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-black mb-8">
                  Request a Quote
                </h2>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        name="First Name"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        name="Last Name"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        name="Email"
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        name="Phone"
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        name="Company"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Interest
                      </label>
                      <select
                        name="Product Interest"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      >
                        <option>Select Product Type</option>
                        <option>SS304 Rings</option>
                        <option>SS316 Rings</option>
                        <option>Automotive Bushings</option>
                        <option>Automotive Gears</option>
                        <option>Custom Components</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="Project Details"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Please describe your hot forging requirements, including materials (SS304/316), dimensions, quantities, specifications, and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Quote Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
