import React from 'react';
import { Plane, Car, Building, Zap, Ship, Cpu } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Plane,
      title: 'Aerospace',
      description: 'Critical components for commercial and military aircraft, meeting stringent aerospace standards.',
      applications: ['Engine components', 'Landing gear', 'Structural parts', 'Fasteners']
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'High-performance forged parts for passenger vehicles, trucks, and racing applications.',
      applications: ['Crankshafts', 'Connecting rods', 'Gears', 'Suspension components']
    },
    {
      icon: Building,
      title: 'Construction',
      description: 'Durable forged components for heavy machinery and construction equipment.',
      applications: ['Hydraulic components', 'Boom parts', 'Track pins', 'Bucket teeth']
    },
    {
      icon: Zap,
      title: 'Energy',
      description: 'Reliable components for power generation, oil & gas, and renewable energy sectors.',
      applications: ['Turbine parts', 'Valve components', 'Pipeline fittings', 'Generator parts']
    },
    {
      icon: Ship,
      title: 'Marine',
      description: 'Corrosion-resistant forged parts for maritime and offshore applications.',
      applications: ['Propeller shafts', 'Anchor chains', 'Deck hardware', 'Engine components']
    },
    {
      icon: Cpu,
      title: 'Technology',
      description: 'Precision components for semiconductor manufacturing and high-tech equipment.',
      applications: ['Semiconductor tooling', 'Precision fixtures', 'Heat sinks', 'Connectors']
    }
  ];

  return (
    <section id="industries" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Industries <span className="text-orange-500">We Serve</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our forging expertise spans across multiple industries, delivering 
            mission-critical components that meet the most demanding requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-orange-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <industry.icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
              <p className="text-gray-300 mb-6">{industry.description}</p>
              
              <div>
                <h4 className="text-orange-500 font-semibold mb-3">Key Applications:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {industry.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-400 text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't See Your Industry?
            </h3>
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
  );
};

export default Industries;