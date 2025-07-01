import React from 'react';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight ">
                Jayesh
                <span className="text-orange-500 block">Forge</span>
                Excellence
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Leading hot forging specialists delivering superior quality SS304/316 rings,
                automotive components, and precision parts for all industries since 1985.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">35+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">10k+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">99.8%</div>
                <div className="text-sm text-gray-400">Quality Rate</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300">
                View Products
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">ISO 9001 Certified</span>
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
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg"
                alt="Hot forging workshop"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Floating element */}
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-2xl">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;