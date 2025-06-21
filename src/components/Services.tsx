import React from 'react';
import { Hammer, Wrench, Settings, Gauge, CheckCircle, Flame, RotateCcw, Zap, Disc } from 'lucide-react';

const Services = () => {
  const hotForgingProcesses = [
    {
      icon: RotateCcw,
      title: 'Ring Rolling',
      description: 'Specialized process for manufacturing seamless rings with superior grain flow and strength.',
      features: [
        'Diameter range: 100mm - 3000mm',
        'Wall thickness: 10mm - 500mm',
        'Materials: SS304, SS316, Carbon Steel',
        'Seamless construction'
      ],
      applications: ['Bearing races', 'Flanges', 'Gears', 'Pressure vessel components']
    },
    {
      icon: Zap,
      title: 'Skew Press Forging',
      description: 'High-precision forging using skew press technology for complex geometries.',
      features: [
        'Force capacity: 500-5000 tons',
        'Precision tolerances: ±0.1mm',
        'Complex shapes capability',
        'Excellent surface finish'
      ],
      applications: ['Automotive gears', 'Connecting rods', 'Crankshafts', 'Industrial components']
    },
    {
      icon: Disc,
      title: 'Friction Forging',
      description: 'Advanced friction welding and forging for joining dissimilar materials.',
      features: [
        'Dissimilar material joining',
        'No filler materials required',
        'High joint strength',
        'Minimal heat affected zone'
      ],
      applications: ['Bimetallic components', 'Valve stems', 'Drive shafts', 'Tool joints']
    },
    {
      icon: Hammer,
      title: 'Hammer Forging',
      description: 'Traditional hammer forging for heavy-duty components and large forgings.',
      features: [
        'Weight capacity: up to 500kg',
        'High impact energy',
        'Excellent grain refinement',
        'Versatile tooling options'
      ],
      applications: ['Heavy machinery parts', 'Marine components', 'Oil & gas equipment', 'Power generation']
    }
  ];

  const services = [
    {
      icon: Wrench,
      title: 'Die Forging',
      description: 'Custom die forging for high-volume production with consistent quality.',
      features: ['Custom tooling design', 'High volume production', 'Consistent quality']
    },
    {
      icon: Settings,
      title: 'Machining Services',
      description: 'Complete machining capabilities from rough to finished components.',
      features: ['CNC machining', 'Surface treatments', 'Quality inspection']
    },
    {
      icon: Gauge,
      title: 'Quality Control',
      description: 'Comprehensive testing and inspection for aerospace-grade quality.',
      features: ['Material testing', 'Dimensional inspection', 'Certification support']
    },
    {
      icon: CheckCircle,
      title: 'Engineering Support',
      description: 'Design optimization and manufacturing consultation services.',
      features: ['Design for manufacturing', 'Cost optimization', 'Technical consultation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Our <span className="text-orange-500">Hot Forging</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive hot forging solutions utilizing advanced processes including 
            ring rolling, skew press, friction forging, and hammer forging techniques.
          </p>
        </div>

        {/* Hot Forging Processes */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 text-white mb-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="bg-orange-500 p-3 rounded-xl">
                  <Flame className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold">Hot Forging Excellence</h3>
              </div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our hot forging processes operate at temperatures between 1000-1200°C, enabling superior 
                material properties and complex geometries. We specialize in SS304, SS316 stainless steel 
                rings and automotive components used across all industries.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {hotForgingProcesses.map((process, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
                  <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <process.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{process.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{process.description}</p>
                  
                  <div className="space-y-3">
                    <h5 className="text-orange-500 font-semibold text-sm">Specifications:</h5>
                    <ul className="space-y-1">
                      {process.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h5 className="text-orange-500 font-semibold text-sm mt-4">Applications:</h5>
                    <div className="flex flex-wrap gap-1">
                      {process.applications.map((app, appIndex) => (
                        <span key={appIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Material Expertise */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-black mb-4">Material Expertise</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized in stainless steel grades and various alloys for diverse industrial applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">SS304</span>
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Stainless Steel 304</h4>
              <p className="text-gray-600 text-sm">Excellent corrosion resistance, food grade applications, general purpose</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">SS316</span>
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Stainless Steel 316</h4>
              <p className="text-gray-600 text-sm">Superior corrosion resistance, marine applications, chemical processing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">ALLOY</span>
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Specialty Alloys</h4>
              <p className="text-gray-600 text-sm">Carbon steel, alloy steel, aluminum, titanium for specific applications</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;