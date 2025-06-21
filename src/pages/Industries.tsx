import React from 'react';
import { Plane, Car, Building, Zap, Ship, Cpu } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Plane,
      title: 'Aerospace',
      description: 'Critical components for commercial and military aircraft, meeting stringent aerospace standards.',
      applications: ['Engine components', 'Landing gear', 'Structural parts', 'Fasteners'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'High-performance forged parts for passenger vehicles, trucks, and racing applications.',
      applications: ['Crankshafts', 'Connecting rods', 'Gears', 'Suspension components'],
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'
    },
    {
      icon: Building,
      title: 'Construction',
      description: 'Durable forged components for heavy machinery and construction equipment.',
      applications: ['Hydraulic components', 'Boom parts', 'Track pins', 'Bucket teeth'],
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg'
    },
    {
      icon: Zap,
      title: 'Energy',
      description: 'Reliable components for power generation, oil & gas, and renewable energy sectors.',
      applications: ['Turbine parts', 'Valve components', 'Pipeline fittings', 'Generator parts'],
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg'
    },
    {
      icon: Ship,
      title: 'Marine',
      description: 'Corrosion-resistant forged parts for maritime and offshore applications.',
      applications: ['Propeller shafts', 'Anchor chains', 'Deck hardware', 'Engine components'],
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg'
    },
    {
      icon: Cpu,
      title: 'Technology',
      description: 'Precision components for semiconductor manufacturing and high-tech equipment.',
      applications: ['Semiconductor tooling', 'Precision fixtures', 'Heat sinks', 'Connectors'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4">
              Industries <span className="text-orange-500">We Serve</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our forging expertise spans across multiple industries, delivering 
              mission-critical components that meet the most demanding requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="bg-orange-500 p-2 rounded-lg">
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  
                  <div>
                    <h4 className="text-orange-500 font-semibold mb-3">Key Applications:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {industry.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                We work with clients across many specialized sectors. Let's discuss 
                how our forging expertise can benefit your specific application.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                Discuss Your Needs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;