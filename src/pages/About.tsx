import React from 'react';
import { Users, Factory, Award, TrendingUp, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '150+', label: 'Expert Engineers' },
    { icon: Factory, number: '50,000', label: 'Sq Ft Facility' },
    { icon: Award, number: '15+', label: 'Industry Awards' },
    { icon: TrendingUp, number: '98%', label: 'Client Retention' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every component meets exact specifications with tolerances as tight as ±0.1mm'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Uncompromising quality standards ensure superior performance in all applications'
    },
    {
      icon: Heart,
      title: 'Reliability',
      description: 'Trusted by industries worldwide for consistent, dependable forged components'
    }
  ];

  const timeline = [
    { year: '1985', event: 'Founded Jayesh Forge with focus on hot forging' },
    { year: '1992', event: 'Expanded to SS304/316 ring manufacturing' },
    { year: '1998', event: 'Added automotive components division' },
    { year: '2005', event: 'Implemented advanced ring rolling technology' },
    { year: '2012', event: 'Expanded to international markets' },
    { year: '2018', event: 'Added friction and skew press forging' },
    { year: '2024', event: 'Leading hot forging specialist serving all industries' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4">
              About <span className="text-orange-500">Jayesh Forge</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nearly four decades of hot forging excellence, specializing in SS304/316 rings 
              and automotive components for industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                  Forging <span className="text-orange-500">Excellence</span> Since 1985
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

              {/* Mission & Vision */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
                  <div className="flex items-center space-x-3 mb-3">
                    <Target className="h-6 w-6 text-orange-500" />
                    <h3 className="text-xl font-bold text-black">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver superior hot forging solutions specializing in stainless steel rings and 
                    automotive components that exceed expectations while maintaining the highest standards 
                    of quality, precision, and reliability for all industries globally.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <Eye className="h-6 w-6 text-orange-500" />
                    <h3 className="text-xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    To be the global leader in hot forging technology, recognized for innovation, 
                    quality, and customer satisfaction while contributing to the advancement of 
                    manufacturing industries worldwide.
                  </p>
                </div>
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

      {/* Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-orange-500">Achievements</span>
            </h2>
            <p className="text-xl text-gray-300">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gray-900 rounded-xl">
                <stat.icon className="h-12 w-12 text-orange-500 mx-auto mb-6" />
                <div className="text-4xl font-bold text-white mb-4">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="text-orange-500">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="text-orange-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              Four decades of continuous growth and innovation
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-500"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{item.year}</div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Partner with <span className="text-orange-500">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Jayesh Forge for their critical forging needs
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            Start Your Project Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;