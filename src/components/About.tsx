import React from 'react';
import { Users, Factory, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '150+', label: 'Expert Engineers' },
    { icon: Factory, number: '50,000', label: 'Sq Ft Facility' },
    { icon: Award, number: '15+', label: 'Industry Awards' },
    { icon: TrendingUp, number: '98%', label: 'Client Retention' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Jayesh Forge: <span className="text-orange-500">Forging Excellence</span> Since 1985
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                For nearly four decades, Jayesh Forge has been at the forefront of hot forging innovation, 
                specializing in SS304/316 rings and automotive components that power industries worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our expertise in ring rolling, skew press, friction forging, and hammer forging processes, 
                combined with state-of-the-art technology and unmatched precision, has made us the trusted 
                partner for companies requiring the highest quality forged components across all industries.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white p-8 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver superior hot forging solutions specializing in stainless steel rings and 
                automotive components that exceed expectations while maintaining the highest standards 
                of quality, precision, and reliability for all industries globally.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <stat.icon className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                alt="Jayesh Forge facility"
                className="w-full h-80 object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
                  alt="Quality control"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg"
                  alt="Engineering team"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;