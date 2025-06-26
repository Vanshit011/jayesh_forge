import React from "react";
import {
  Hammer,
  Wrench,
  Settings,
  Gauge,
  CheckCircle,
  Flame,
  RotateCcw,
  Zap,
  Disc,
  ArrowRight,
} from "lucide-react";
import  { Link } from "react-router-dom";

const Services = () => {
  const hotForgingProcesses = [
    {
      icon: RotateCcw,
      title: "Ring Rolling",
      description:
        "Specialized process for manufacturing seamless rings with superior grain flow and strength.",
      image:
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      features: [
        "Diameter range: 100mm - 3000mm",
        "Wall thickness: 10mm - 500mm",
        "Materials: SS304, SS316, Carbon Steel",
        "Seamless construction",
      ],
      applications: [
        "Bearing races",
        "Flanges",
        "Gears",
        "Pressure vessel components",
      ],
    },
    {
      icon: Zap,
      title: "Skew Press Forging",
      description:
        "High-precision forging using skew press technology for complex geometries.",
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      features: [
        "Force capacity: 500-5000 tons",
        "Precision tolerances: ±0.1mm",
        "Complex shapes capability",
        "Excellent surface finish",
      ],
      applications: [
        "Automotive gears",
        "Connecting rods",
        "Crankshafts",
        "Industrial components",
      ],
    },
    {
      icon: Disc,
      title: "Friction Forging",
      description:
        "Advanced friction welding and forging for joining dissimilar materials.",
      image:
        "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
      features: [
        "Dissimilar material joining",
        "No filler materials required",
        "High joint strength",
        "Minimal heat affected zone",
      ],
      applications: [
        "Bimetallic components",
        "Valve stems",
        "Drive shafts",
        "Tool joints",
      ],
    },
    {
      icon: Hammer,
      title: "Hammer Forging",
      description:
        "Traditional hammer forging for heavy-duty components and large forgings.",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
      features: [
        "Weight capacity: up to 500kg",
        "High impact energy",
        "Excellent grain refinement",
        "Versatile tooling options",
      ],
      applications: [
        "Heavy machinery parts",
        "Marine components",
        "Oil & gas equipment",
        "Power generation",
      ],
    },
  ];

  const materialExpertise = [
    {
      name: "Stainless Steel (SS)",
      grades: ["SS304", "SS316", "SS316L", "SS321", "SS347"],
      properties: "Excellent corrosion resistance, high strength, food grade",
    },
    {
      name: "Mild Steel (MS)",
      grades: ["IS2062", "ASTM A36", "EN S235", "JIS SS400"],
      properties: "Good weldability, cost-effective, versatile applications",
    },
    {
      name: "Aluminum",
      grades: ["6061", "6063", "7075", "2024", "5083"],
      properties:
        "Lightweight, corrosion resistant, excellent strength-to-weight ratio",
    },
    {
      name: "Brass",
      grades: ["C36000", "C37700", "C26000", "C46400"],
      properties:
        "Excellent machinability, corrosion resistance, antimicrobial",
    },
    {
      name: "Copper",
      grades: ["C11000", "C10100", "C12200", "C14500"],
      properties:
        "High electrical conductivity, thermal conductivity, antimicrobial",
    },
  ];

  const services = [
    {
      icon: Wrench,
      title: "Die Forging",
      description:
        "Custom die forging for high-volume production with consistent quality.",
      features: [
        "Custom tooling design",
        "High volume production",
        "Consistent quality",
      ],
    },
    {
      icon: Settings,
      title: "Machining Services",
      description:
        "Complete machining capabilities from rough to finished components.",
      features: ["CNC machining", "Surface treatments", "Quality inspection"],
    },
    {
      icon: Gauge,
      title: "Quality Control",
      description:
        "Comprehensive testing and inspection for aerospace-grade quality.",
      features: [
        "Material testing",
        "Dimensional inspection",
        "Certification support",
      ],
    },
    {
      icon: CheckCircle,
      title: "Engineering Support",
      description:
        "Design optimization and manufacturing consultation services.",
      features: [
        "Design for manufacturing",
        "Cost optimization",
        "Technical consultation",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4">
              Our <span className="text-orange-500">Hot Forging</span> Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive hot forging solutions utilizing advanced processes
              including ring rolling, skew press, friction forging, and hammer
              forging techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Hot Forging Excellence */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white">
                Hot Forging Excellence
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our hot forging processes operate at temperatures between
              1000-1200°C, enabling superior material properties and complex
              geometries. We specialize in SS304, SS316 stainless steel rings
              and automotive components used across all industries.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl mb-12">
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
              alt="Hot forging process"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Advanced Hot Forging Technology
              </h3>
              <p className="text-orange-300">
                Precision forging at 1000-1200°C for superior results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Forging Processes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="text-orange-500">Forging Processes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Specialized hot forging techniques for superior quality components
            </p>
          </div>

          <div className="space-y-16">
            {hotForgingProcesses.map((process, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={process.image}
                      alt={process.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                      <div className="bg-orange-500 p-2 rounded-lg">
                        <process.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {process.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-4">
                      {process.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {process.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-semibold text-black mb-4">
                      Process Specifications
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {process.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="bg-black p-6 rounded-xl text-white">
                    <h4 className="text-xl font-semibold text-orange-500 mb-4">
                      Applications
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {process.applications.map((app, appIndex) => (
                        <div
                          key={appIndex}
                          className="flex items-start space-x-2"
                        >
                          <ArrowRight className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Material <span className="text-orange-500">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600">
              Specialized in various metals and alloys for diverse applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialExpertise.map((material, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-orange-500 text-white p-4 rounded-lg mb-6 text-center">
                  <h3 className="text-xl font-bold">{material.name}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Available Grades:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {material.grades.map((grade, gradeIndex) => (
                        <span
                          key={gradeIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Properties:
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {material.properties}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Additional <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support services for complete project solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <Link to="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Request Custom Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
