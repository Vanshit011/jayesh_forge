import React from 'react';
import { Circle, Car, Wrench, Settings, Factory, Cog } from 'lucide-react';

const Products = () => {
  const mainProducts = [
    {
      icon: Circle,
      title: 'SS304 & SS316 Rings',
      description: 'Premium stainless steel rings manufactured using advanced ring rolling technology',
      specifications: [
        'Outer Diameter: 100mm - 3000mm',
        'Wall Thickness: 10mm - 500mm',
        'Height: 50mm - 1000mm',
        'Tolerance: ±0.5mm',
        'Surface Finish: Ra 3.2μm',
        'Material Grades: SS304, SS316, SS316L'
      ],
      applications: [
        'Bearing races and rings',
        'Flanges for piping systems',
        'Pressure vessel components',
        'Turbine rings',
        'Marine hardware',
        'Food processing equipment'
      ],
      industries: ['Aerospace', 'Marine', 'Food Processing', 'Chemical', 'Power Generation', 'Oil & Gas'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    },
    {
      icon: Car,
      title: 'Automotive Components',
      description: 'High-performance forged automotive parts for passenger and commercial vehicles',
      specifications: [
        'Bush Diameter: 10mm - 200mm',
        'Gear Module: 1.0 - 8.0',
        'Weight Range: 0.1kg - 50kg',
        'Material: Carbon Steel, Alloy Steel',
        'Hardness: 25-65 HRC',
        'Fatigue Life: >10⁶ cycles'
      ],
      applications: [
        'Engine bushings and sleeves',
        'Transmission gears',
        'Differential components',
        'Suspension bushings',
        'Steering components',
        'Brake system parts'
      ],
      industries: ['Automotive', 'Heavy Vehicles', 'Racing', 'Agricultural Machinery', 'Construction Equipment'],
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'
    }
  ];

  const detailedProducts = [
    {
      category: 'Bushings & Sleeves',
      items: [
        { name: 'Engine Bushings', material: 'Bronze, Steel', size: '10-100mm', application: 'Engine assemblies' },
        { name: 'Suspension Bushings', material: 'Rubber-Steel', size: '20-80mm', application: 'Chassis systems' },
        { name: 'Transmission Sleeves', material: 'Hardened Steel', size: '15-150mm', application: 'Gearbox assemblies' },
        { name: 'Steering Bushings', material: 'Polymer-Steel', size: '12-60mm', application: 'Steering systems' }
      ]
    },
    {
      category: 'Gears & Transmission',
      items: [
        { name: 'Spur Gears', material: 'Alloy Steel', size: 'Module 1-8', application: 'Transmission systems' },
        { name: 'Helical Gears', material: 'Case Hardened Steel', size: 'Module 2-6', application: 'Differential assemblies' },
        { name: 'Bevel Gears', material: 'Carburized Steel', size: 'Module 3-10', application: 'Drive systems' },
        { name: 'Ring Gears', material: 'Heat Treated Steel', size: 'Dia 100-800mm', application: 'Final drive assemblies' }
      ]
    },
    {
      category: 'Engine Components',
      items: [
        { name: 'Connecting Rods', material: '4340 Steel', size: '120-250mm', application: 'Engine assemblies' },
        { name: 'Crankshaft Components', material: 'Forged Steel', size: 'Custom', application: 'Engine blocks' },
        { name: 'Valve Components', material: 'Stainless Steel', size: '6-50mm', application: 'Cylinder heads' },
        { name: 'Piston Components', material: 'Aluminum Alloy', size: '50-150mm', application: 'Engine pistons' }
      ]
    },
    {
      category: 'Industrial Applications',
      items: [
        { name: 'Hydraulic Components', material: 'Steel, SS316', size: 'Custom', application: 'Hydraulic systems' },
        { name: 'Pump Components', material: 'Corrosion Resistant', size: 'Various', application: 'Industrial pumps' },
        { name: 'Valve Bodies', material: 'SS304/316', size: '25-300mm', application: 'Process control' },
        { name: 'Coupling Components', material: 'Alloy Steel', size: 'Custom', application: 'Power transmission' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4">
              Our <span className="text-orange-500">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized in SS304/316 rings and automotive components including bushings, 
              gears, and precision parts used across all industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainProducts.map((product, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                      <div className="bg-orange-500 p-2 rounded-lg">
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-4">{product.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                  </div>

                  {/* Specifications */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-semibold text-black mb-4">Technical Specifications</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {product.specifications.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="bg-black p-6 rounded-xl text-white">
                    <h4 className="text-xl font-semibold text-orange-500 mb-4">Key Applications</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {product.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">Industries Served</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.industries.map((industry, industryIndex) => (
                        <span
                          key={industryIndex}
                          className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Detailed <span className="text-orange-500">Product Range</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive automotive and industrial components for all applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {detailedProducts.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <div className="bg-orange-500 w-3 h-3 rounded-full mr-3"></div>
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-orange-500 pl-4 py-3 hover:bg-gray-50 transition-colors duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-black">{item.name}</h4>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{item.size}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">Material: {item.material}</p>
                      <p className="text-sm text-orange-600 font-medium">Application: {item.application}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Industries Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Serving <span className="text-orange-500">All Industries</span> Worldwide
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Our SS304/316 rings and automotive components are trusted by companies across 
              aerospace, automotive, marine, oil & gas, power generation, food processing, 
              chemical, construction, and manufacturing industries globally.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Factory className="h-8 w-8 text-orange-500" />
                <span className="text-lg text-white">Manufacturing</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Settings className="h-8 w-8 text-orange-500" />
                <span className="text-lg text-white">Processing</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Wrench className="h-8 w-8 text-orange-500" />
                <span className="text-lg text-white">Engineering</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300">
                Request Product Catalog
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300">
                Custom Product Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;