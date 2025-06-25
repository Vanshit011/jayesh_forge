import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Award,
  // Users,
  // Factory,
  // TrendingUp,
  Flame,
  Thermometer,
  Scissors,
  Hammer,
  Wrench,
  Droplets,
  HardHat,
  Cpu,
  Gauge,
  Calendar,
  Clock,
  ChevronRight,
} from "lucide-react";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
// import frogImage from "../assets/logo.png";

const Home = () => {
  // const stats = [
  //   { icon: Users, number: "150+", label: "Expert Engineers" },
  //   { icon: Factory, number: "50,000", label: "Sq Ft Facility" },
  //   { icon: Award, number: "15+", label: "Industry Awards" },
  //   { icon: TrendingUp, number: "98%", label: "Client Retention" },
  // ];

  const forgingSteps = [
    {
      icon: Scissors,
      title: "Cutting",
      description:
        "Precision cutting of raw materials to required dimensions using advanced cutting equipment",
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      details: [
        "Plasma cutting",
        "Band saw cutting",
        "Shearing operations",
        "Material optimization",
      ],
    },
    {
      icon: Thermometer,
      title: "Heating",
      description:
        "Materials heated to 1000-1200°C in controlled atmosphere furnaces for optimal forging",
      image:
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      details: [
        "Induction heating",
        "Gas furnaces",
        "Temperature control",
        "Atmosphere protection",
      ],
    },
    {
      icon: Hammer,
      title: "Shape Forging",
      description:
        "Hot forging process to achieve desired shape using specialized dies and equipment",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
      details: [
        "Die forging",
        "Open die forging",
        "Ring rolling",
        "Press forging",
      ],
    },
    {
      icon: Wrench,
      title: "Trimming",
      description:
        "Removal of excess material and flash to achieve precise component dimensions",
      image:
        "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
      details: [
        "Flash removal",
        "Edge trimming",
        "Dimensional accuracy",
        "Surface preparation",
      ],
    },
    {
      icon: Droplets,
      title: "Water Quenching",
      description:
        "Controlled cooling process using water or oil to achieve desired material properties",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg",
      details: [
        "Water quenching",
        "Oil quenching",
        "Controlled cooling",
        "Stress relief",
      ],
    },
    {
      icon: HardHat,
      title: "Hardening",
      description:
        "Heat treatment process to increase hardness and strength of forged components",
      image:
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      details: [
        "Hardening cycles",
        "Temperature control",
        "Hardness testing",
        "Quality verification",
      ],
    },
    {
      icon: Flame,
      title: "Annealing",
      description:
        "Stress relief and grain refinement through controlled heating and cooling cycles",
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      details: [
        "Stress relief",
        "Grain refinement",
        "Ductility improvement",
        "Internal stress removal",
      ],
    },
    {
      icon: Cpu,
      title: "CNC Machining",
      description:
        "Precision machining to achieve final dimensions and surface finish requirements",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
      details: [
        "CNC turning",
        "CNC milling",
        "Surface finishing",
        "Precision machining",
      ],
    },
    {
      icon: Gauge,
      title: "Tolerance Management",
      description:
        "Final inspection and quality control to ensure all specifications are met",
      image:
        "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
      details: [
        "Dimensional inspection",
        "Surface quality check",
        "Material testing",
        "Final certification",
      ],
    },
  ];

  const latestNews = [
    {
      date: "2025-01-15",
      title: "Advanced Ring Rolling Technology Implementation",
      excerpt:
        "Jayesh Forge successfully implements state-of-the-art ring rolling equipment, increasing production capacity by 40% for SS304/316 rings.",
      category: "Technology",
      readTime: "3 min read",
    },
    {
      date: "2025-01-12",
      title: "Automotive Industry Growth in Hot Forging",
      excerpt:
        "The automotive sector shows 25% growth in demand for precision forged components, with electric vehicle applications leading the surge.",
      category: "Industry News",
      readTime: "4 min read",
    },
    {
      date: "2025-01-10",
      title: "Sustainability in Hot Forging Processes",
      excerpt:
        "New eco-friendly forging techniques reduce energy consumption by 30% while maintaining superior quality standards.",
      category: "Sustainability",
      readTime: "5 min read",
    },
    {
      date: "2025-01-08",
      title: "Export Opportunities for Indian Forging Industry",
      excerpt:
        "Indian forging companies see increased export opportunities in aerospace and marine sectors, with quality certifications driving growth.",
      category: "Export",
      readTime: "4 min read",
    },
  ];

  const capabilities = [
    {
      title: "Production Capacity",
      value: "400+ Tons/Month",
      description: "High-volume production capability",
    },
    {
      title: "Quality Standards",
      value: "99% Accuracy",
      description: "Precision manufacturing excellence",
    },
    {
      title: "Delivery Time",
      value: "7-15 Days",
      description: "Fast turnaround for urgent orders",
    },
    {
      title: "Material Range",
      value: "100+ Grades",
      description: "Comprehensive material expertise",
    },
  ];
  const backgroundImages = [bg1, bg2, bg3]; // Add more if needed

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex: number) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex items-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Jayesh
                  <span className="text-orange-500 block">Forge</span>
                  Excellence
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Serving automotive, industrial, and custom sectors with
                  high-performance forged components.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">25+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">10k+</div>
                  <div className="text-sm text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">99%</div>
                  <div className="text-sm text-gray-400">Quality Rate</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 text-center"
                >
                  View Products
                </Link>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6 pt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-300">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-300">Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-300">Industry Leading</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              {/* <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={frogImage}
                  alt="Hot forging workshop"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div> */}
              {/* Floating element */}
              {/* <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-2xl">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support Available</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="font-sans">
        {" "}
        {/* Remove overall background here, let sections define their own */}
        {/* Main Overview Section (Light Background) */}
        <div className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-12 leading-tight">
              {" "}
              {/* font-extrabold, darker text, tighter line-height */}
              Jayesh Forge:{" "}
              <span className="text-jayeshOrange">Forging Excellence</span>{" "}
              Since 2004
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100 mb-16">
              {" "}
              {/* bg-gray-50, more padding, larger rounded corners, strong shadow, border */}
              <div className="flex-1 min-w-[300px]">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  For nearly four decades, Jayesh Forge has been at the
                  forefront of hot forging innovation, specializing in SS304/316
                  rings and automotive components that power industries
                  worldwide.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Our expertise in ring rolling, skew press, friction forging,
                  and hammer forging processes, combined with state-of-the-art
                  technology and unmatched precision, has made us the trusted
                  partner for companies requiring the highest quality forged
                  components across all industries.
                </p>
              </div>
              <div className="flex-1 min-w-[300px] text-center">
                <img
                  src={bg1}
                  alt="Jayesh Forge facility or forging process"
                  className="max-w-full h-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105" // Larger rounded corners, stronger shadow, subtle hover effect
                />
              </div>
            </div>
          </div>
        </div>
        {/* Mission & Vision Section (Dark Background with Orange/White Text) */}
        <div className="bg-black py-20 px-4">
          {" "}
          {/* Dark background for this section, more vertical padding */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-12">
              {" "}
              {/* Larger gap */}
              <div className="p-8 rounded-xl border border-gray-700 flex-1 min-w-[350px] max-w-2xl text-left bg-gray-800 shadow-2xl">
                {" "}
                {/* Slightly darker background for cards, border, shadow */}
                <h2 className="text-5xl font-bold text-jayeshOrange-light mb-6 flex items-center">
                  {" "}
                  {/* Lighter orange for heading, flex for icon, larger text */}
                  <svg
                    className="w-10 h-10 mr-4 text-jayeshOrange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Our Mission
                </h2>
                <p className="text-xl leading-relaxed text-gray-300">
                  {" "}
                  {/* White/light gray text for body */}
                  To deliver superior hot forging solutions specializing in
                  stainless steel rings and automotive components that exceed
                  expectations while maintaining the highest standards of
                  quality, precision, and reliability for all industries
                  globally.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-gray-700 flex-1 min-w-[350px] max-w-2xl text-left bg-gray-800 shadow-2xl">
                <h2 className="text-5xl font-bold text-jayeshOrange-light mb-6 flex items-center">
                  <svg
                    className="w-10 h-10 mr-4 text-jayeshOrange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Our Vision
                </h2>
                <p className="text-xl leading-relaxed text-gray-300">
                  To be the global leader in hot forging, recognized for our
                  innovation, sustainable practices, and unwavering commitment
                  to customer success and technological advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Forging Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Hot Forging <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive 9-step hot forging process ensures superior
              quality and precision from raw material to finished component.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {forgingSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors duration-300 group"
              >
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="bg-orange-500 p-2 rounded-lg">
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="text-orange-500">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading capabilities that set us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {capability.value}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">
                Latest <span className="text-orange-500">Industry News</span>
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with the latest developments in hot forging
                industry
              </p>
            </div>
            <Link
              to="/blog"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center"
            >
              View All News
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestNews.map((news, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {news.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {news.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-black mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                  <Link
                    to="/blog"
                    className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your{" "}
            <span className="text-orange-500">Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your hot forging
            requirements
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Get Quote Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
