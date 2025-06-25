import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Flame, Cog, Globe, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  const postsPerPage = 6;

  const categories = [
    { name: 'All', count: 24, icon: Globe },
    { name: 'Ring Rolling', count: 6, icon: Cog },
    { name: 'Skew Press', count: 4, icon: TrendingUp },
    { name: 'Friction Forging', count: 5, icon: Flame },
    { name: 'Hammer Forging', count: 4, icon: Cog },
    { name: 'Materials', count: 3, icon: Globe },
    { name: 'Quality Control', count: 2, icon: User }
  ];

  
  const allBlogPosts = [
    {
      id: 1,
      title: 'Advanced Ring Rolling Technology: Revolutionizing Seamless Ring Manufacturing',
      excerpt: 'Explore how modern ring rolling technology is transforming the production of SS304/316 rings with superior grain flow and dimensional accuracy.',
      content: `Ring rolling technology has evolved significantly over the past decade, offering unprecedented precision and efficiency in manufacturing seamless rings. This advanced process begins with a preformed ring blank that is heated to forging temperature (typically 1000-1200°C for stainless steel grades).

The ring rolling process involves two main rolls - a mandrel roll and a main roll - that work together to reduce the wall thickness while increasing the diameter. This radial-axial ring rolling technique ensures uniform material distribution and superior grain flow characteristics.

Key advantages of modern ring rolling include:
- Seamless construction eliminating weak points
- Superior grain flow following the ring contour
- Excellent dimensional accuracy (±0.5mm tolerance achievable)
- Material savings of up to 80% compared to machining from solid
- Enhanced mechanical properties through controlled deformation

Applications span across aerospace, automotive, oil & gas, and power generation industries where critical performance is essential.

The process begins with careful material selection and preparation. Raw materials are inspected for chemical composition, mechanical properties, and surface quality. The material is then cut to the appropriate size and heated in controlled atmosphere furnaces to prevent oxidation and decarburization.

During the rolling process, precise control of temperature, rolling speed, and pressure ensures optimal material flow and grain structure development. Modern ring rolling machines are equipped with computer-controlled systems that monitor and adjust process parameters in real-time.

Quality control measures include dimensional inspection, ultrasonic testing for internal defects, and mechanical property verification. Advanced measurement systems ensure that finished rings meet tight tolerance requirements and performance specifications.

Recent developments in ring rolling technology include the integration of artificial intelligence for process optimization, advanced heating systems for improved energy efficiency, and automated handling systems for increased productivity and safety.`,
      author: 'Dr. Rajesh Patel',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Ring Rolling',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      tags: ['Ring Rolling', 'SS304', 'SS316', 'Technology'],
      views: 1250
    },
    {
      id: 2,
      title: 'Skew Press Forging: Precision Manufacturing for Complex Geometries',
      excerpt: 'Understanding the capabilities and applications of skew press forging in producing high-precision automotive and industrial components.',
      content: `Skew press forging represents a significant advancement in precision forging technology, offering exceptional accuracy and surface finish for complex geometries. This process utilizes a skew press machine that applies controlled force through precisely angled dies.

The skew press mechanism allows for:
- Multi-directional material flow control
- Exceptional dimensional accuracy (±0.1mm)
- Superior surface finish (Ra 1.6μm achievable)
- Complex shape capability in single operations
- Reduced secondary machining requirements

Process parameters are critical for success:
- Temperature control: 1050-1150°C for steel alloys
- Press force: 500-5000 tons depending on component size
- Die design: Computer-optimized for material flow
- Cooling rate: Controlled to achieve desired properties

Applications include automotive gears, connecting rods, crankshafts, and precision industrial components where tight tolerances are essential.

The skew press forging process begins with precise material preparation and heating. Materials are heated uniformly to forging temperature in controlled atmosphere furnaces to prevent oxidation and ensure consistent properties throughout the workpiece.

Die design is crucial for successful skew press forging. Computer-aided design and finite element analysis are used to optimize die geometry, predict material flow, and minimize defects. The dies are manufactured to extremely tight tolerances and undergo rigorous quality control before use.

During the forging operation, the skew press applies force at a specific angle, causing the material to flow in a controlled manner to fill the die cavity completely. This angled approach allows for better material utilization and improved grain flow compared to conventional forging methods.

Quality control measures include dimensional inspection using coordinate measuring machines, surface roughness measurement, and mechanical property testing. Non-destructive testing methods such as ultrasonic inspection and magnetic particle testing are used to detect internal defects.`,
      author: 'Priya Sharma',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Skew Press',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['Skew Press', 'Precision', 'Automotive', 'Gears'],
      views: 980
    },
    {
      id: 3,
      title: 'Friction Forging: Joining Dissimilar Materials with Superior Strength',
      excerpt: 'Discover how friction forging technology enables the joining of different materials without filler metals, creating stronger bonds.',
      content: `Friction forging is an innovative solid-state joining process that creates metallurgical bonds between dissimilar materials without the need for filler metals. This technology has revolutionized the manufacturing of bimetallic components.

The process involves:
- Rotational friction between components
- Heat generation through controlled friction
- Plastic deformation at the interface
- Forge pressure application for consolidation
- Rapid cooling to lock in the joint

Key benefits include:
- No heat-affected zone degradation
- Superior joint strength (often exceeding base materials)
- No filler material contamination
- Excellent corrosion resistance at the joint
- Cost-effective for high-volume production

Applications span automotive valve stems, drive shafts, tool joints for oil drilling, and aerospace components requiring dissimilar material combinations.

Quality control measures include ultrasonic testing, tensile testing, and metallographic examination to ensure joint integrity.

The friction forging process begins with careful preparation of the components to be joined. Surface preparation is critical, as any contamination or oxidation can affect joint quality. The components are machined to precise dimensions and cleaned thoroughly before processing.

During the friction phase, one component is rotated at high speed while the other remains stationary. The friction generates heat at the interface, causing the materials to reach a plastic state. The rotation is then stopped, and forge pressure is applied to consolidate the joint.

Process parameters such as rotation speed, friction time, forge pressure, and cooling rate are carefully controlled to achieve optimal joint properties. These parameters vary depending on the materials being joined and the desired joint characteristics.

Metallurgical examination of friction forged joints reveals a fine-grained structure at the interface with excellent bonding between the dissimilar materials. The joint typically exhibits superior mechanical properties compared to the base materials.`,
      author: 'Amit Kumar',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Friction Forging',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg',
      tags: ['Friction Forging', 'Bimetallic', 'Joining', 'Innovation'],
      views: 1150
    },
    {
      id: 4,
      title: 'Hammer Forging: Traditional Strength for Heavy-Duty Applications',
      excerpt: 'The enduring relevance of hammer forging in producing large, heavy-duty components for marine and industrial applications.',
      content: `Hammer forging remains a cornerstone technology for producing large, heavy-duty components where impact energy and grain refinement are critical. This time-tested process continues to evolve with modern control systems and automation.

Modern hammer forging features:
- Programmable impact energy control
- Precise temperature monitoring
- Automated handling systems
- Computer-controlled die positioning
- Real-time quality monitoring

The process excels in:
- Large component production (up to 500kg)
- Excellent grain refinement through impact
- Superior mechanical properties
- Versatile tooling options
- Cost-effective for medium volumes

Applications include marine propeller shafts, heavy machinery components, oil & gas equipment, and power generation parts where reliability is paramount.

Quality assurance involves ultrasonic testing, hardness verification, and dimensional inspection to ensure components meet stringent specifications.

The hammer forging process begins with material selection and preparation. Large billets are heated uniformly in gas-fired or electric furnaces to forging temperature. Temperature control is critical to ensure proper material flow and prevent defects.

Modern hammer forging equipment includes programmable controls that allow precise adjustment of impact energy, timing, and die positioning. This level of control ensures consistent quality and reduces the skill requirements for operators.

Die design for hammer forging must account for the high impact forces and rapid material flow. Dies are typically made from high-strength tool steels and undergo special heat treatment to withstand the severe operating conditions.

The forging operation involves multiple blows to gradually shape the component. Each blow is carefully controlled to achieve the desired material flow and grain structure. The number and energy of blows depend on the component size, material, and desired properties.

Post-forging operations include trimming, heat treatment, and machining to achieve final dimensions and properties. Quality control measures ensure that finished components meet all specifications and performance requirements.`,
      author: 'Vikram Singh',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'Hammer Forging',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      tags: ['Hammer Forging', 'Heavy Duty', 'Marine', 'Industrial'],
      views: 890
    },
    {
      id: 5,
      title: 'SS304 vs SS316: Material Selection for Hot Forging Applications',
      excerpt: 'Comprehensive comparison of stainless steel grades SS304 and SS316 for hot forging applications across different industries.',
      content: `Selecting the appropriate stainless steel grade is crucial for hot forging success. SS304 and SS316 are the most commonly used grades, each with distinct characteristics and applications.

SS304 Characteristics:
- Chromium: 18-20%, Nickel: 8-10.5%
- Excellent corrosion resistance in most environments
- Good formability and weldability
- Cost-effective for general applications
- Temperature range: -196°C to 870°C

SS316 Characteristics:
- Chromium: 16-18%, Nickel: 10-14%, Molybdenum: 2-3%
- Superior corrosion resistance, especially chloride environments
- Enhanced strength at elevated temperatures
- Excellent for marine and chemical applications
- Temperature range: -196°C to 925°C

Hot forging considerations:
- Forging temperature: 1050-1200°C for both grades
- SS316 requires slightly higher forging pressures
- Both grades work-harden rapidly
- Proper heat treatment essential for optimal properties

Application guidelines help determine the best choice for specific requirements and environmental conditions.

The chemical composition differences between SS304 and SS316 result in significant performance variations. The molybdenum content in SS316 provides enhanced corrosion resistance, particularly in chloride-containing environments such as marine applications.

Mechanical properties also differ between the grades. SS316 typically exhibits higher strength and better creep resistance at elevated temperatures, making it suitable for high-temperature applications in power generation and chemical processing.

Cost considerations are important in material selection. SS316 is typically 20-30% more expensive than SS304 due to the molybdenum content. However, the enhanced performance may justify the additional cost in critical applications.

Hot forging behavior varies between the grades. SS316 requires slightly higher forging temperatures and pressures due to its higher alloy content. Both grades exhibit rapid work hardening, requiring careful control of forging parameters to prevent cracking.

Heat treatment after forging is essential for both grades to achieve optimal properties. Solution annealing at 1050-1150°C followed by rapid cooling restores ductility and corrosion resistance.`,
      author: 'Neha Gupta',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Materials',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      tags: ['SS304', 'SS316', 'Materials', 'Selection'],
      views: 1340
    },
    {
      id: 6,
      title: 'Quality Control in Hot Forging: Ensuring Excellence at Every Step',
      excerpt: 'Essential quality control measures and testing protocols that guarantee superior hot forging results and customer satisfaction.',
      content: `Quality control in hot forging is a comprehensive process that begins with raw material inspection and continues through final component delivery. Modern quality systems integrate advanced testing technologies with traditional inspection methods.

Key quality control stages:
1. Raw material verification
2. Process parameter monitoring
3. In-process inspection
4. Final component testing
5. Documentation and traceability

Testing methods include:
- Chemical composition analysis
- Mechanical property testing
- Dimensional inspection using CMM
- Ultrasonic flaw detection
- Magnetic particle inspection
- Surface roughness measurement

Statistical process control (SPC) helps maintain consistent quality by monitoring key parameters and identifying trends before defects occur.

Certification standards such as ISO 9001, AS9100 (aerospace), and IATF 16949 (automotive) provide frameworks for quality management systems.

Advanced technologies like AI-powered vision systems and real-time process monitoring are revolutionizing quality control in modern forging operations.

Raw material inspection is the foundation of quality control. Incoming materials are tested for chemical composition, mechanical properties, and surface quality. Material certificates are verified, and samples are tested to confirm compliance with specifications.

Process monitoring during forging includes temperature measurement, pressure monitoring, and dimensional checks. Modern forging equipment is equipped with sensors that continuously monitor critical parameters and alert operators to any deviations.

Non-destructive testing methods are essential for detecting internal defects that may not be visible on the surface. Ultrasonic testing can detect inclusions, cracks, and other internal discontinuities. Magnetic particle inspection reveals surface and near-surface defects in ferromagnetic materials.

Final inspection includes dimensional verification using coordinate measuring machines, surface roughness measurement, and mechanical property testing. All results are documented and maintained for traceability purposes.

Quality management systems provide the framework for consistent quality control. Regular audits, training programs, and continuous improvement initiatives ensure that quality standards are maintained and enhanced over time.`,
      author: 'Sunita Rao',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'Quality Control',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['Quality Control', 'Testing', 'Standards', 'Inspection'],
      views: 1120
    },
    {
      id: 7,
      title: 'Energy Efficiency in Hot Forging: Sustainable Manufacturing Practices',
      excerpt: 'Innovative approaches to reduce energy consumption while maintaining quality in hot forging operations.',
      content: `Energy efficiency has become a critical focus in hot forging operations, driven by both environmental concerns and cost reduction objectives. Modern forging facilities are implementing innovative technologies to optimize energy usage.

Energy-saving technologies:
- Induction heating systems with precise control
- Heat recovery systems for furnace exhaust
- Variable frequency drives for equipment
- LED lighting and smart building systems
- Waste heat utilization for preheating

Process optimization strategies:
- Batch heating for improved efficiency
- Optimal heating schedules to minimize energy loss
- Insulation improvements in furnaces
- Real-time energy monitoring systems
- Predictive maintenance to maintain efficiency

Benefits of energy-efficient operations:
- Reduced operating costs (20-30% savings possible)
- Lower carbon footprint
- Improved competitiveness
- Enhanced corporate sustainability
- Compliance with environmental regulations

Case studies demonstrate significant energy savings through systematic implementation of efficiency measures while maintaining or improving product quality.`,
      author: 'Ravi Mehta',
      date: '2024-01-01',
      readTime: '5 min read',
      category: 'Materials',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg',
      tags: ['Energy Efficiency', 'Sustainability', 'Cost Reduction', 'Environment'],
      views: 950
    },
    {
      id: 8,
      title: 'Automotive Industry Trends: Electric Vehicle Impact on Forging',
      excerpt: 'How the electric vehicle revolution is creating new opportunities and challenges for the automotive forging industry.',
      content: `The electric vehicle (EV) revolution is reshaping the automotive forging landscape, creating new opportunities while challenging traditional manufacturing approaches. Forging companies must adapt to changing component requirements and materials.

EV-specific forging applications:
- Battery housing components
- Electric motor housings
- Charging infrastructure components
- Lightweight structural parts
- Heat management components

Material considerations for EVs:
- Aluminum alloys for weight reduction
- High-strength steels for safety
- Copper alloys for electrical conductivity
- Specialized stainless steels for corrosion resistance

Manufacturing challenges:
- Tighter tolerances for electrical components
- New material combinations
- Higher volume requirements
- Cost pressure from competition
- Rapid technology evolution

Opportunities for forging companies:
- New component designs requiring forging expertise
- Lightweighting initiatives favoring forged parts
- Infrastructure development needs
- Global EV market expansion
- Technology partnerships with OEMs

Success in the EV market requires investment in new capabilities, materials expertise, and close collaboration with automotive manufacturers.`,
      author: 'Lokesh Dudhat',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Ring Rolling',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg',
      tags: ['Electric Vehicles', 'Automotive', 'Innovation', 'Future'],
      views: 1280
    },
    {
      id: 9,
      title: 'Advanced Die Design for Complex Forging Operations',
      excerpt: 'Computer-aided die design and simulation technologies that optimize forging processes and reduce development time.',
      content: `Modern die design has evolved from traditional trial-and-error approaches to sophisticated computer-aided engineering processes. Advanced simulation software enables optimization before physical tooling production.

CAD/CAE technologies:
- 3D modeling and visualization
- Finite element analysis (FEA)
- Material flow simulation
- Thermal analysis
- Die stress analysis

Design optimization factors:
- Material flow patterns
- Die filling characteristics
- Temperature distribution
- Stress concentration areas
- Tool life considerations

Benefits of advanced die design:
- Reduced development time (50-70% faster)
- Improved part quality and consistency
- Extended die life
- Reduced material waste
- Lower overall production costs

Simulation capabilities include predicting defects, optimizing process parameters, and validating designs before manufacturing. This approach significantly reduces the risk of production issues and accelerates time-to-market for new components.

Integration with manufacturing execution systems enables real-time monitoring and adjustment of process parameters based on simulation predictions.`,
      author: 'Dr. Rajesh Patel',
      date: '2023-12-25',
      readTime: '8 min read',
      category: 'Skew Press',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      tags: ['Die Design', 'CAD', 'Simulation', 'Optimization'],
      views: 1050
    },
    {
      id: 10,
      title: 'Heat Treatment Optimization for Forged Components',
      excerpt: 'Advanced heat treatment processes that maximize the mechanical properties of hot forged stainless steel components.',
      content: `Heat treatment is crucial for achieving optimal mechanical properties in forged components. Modern heat treatment processes use precise temperature control and atmosphere management for consistent results.

Heat treatment stages:
- Solution annealing
- Quenching
- Tempering/aging
- Stress relief
- Final inspection

For stainless steel forgings:
- Solution temperature: 1050-1150°C
- Rapid cooling to prevent carbide precipitation
- Controlled atmosphere to prevent oxidation
- Precise temperature uniformity (±5°C)

Advanced techniques:
- Vacuum heat treatment
- Controlled atmosphere processing
- Induction heating for selective treatment
- Computer-controlled cooling rates
- Real-time monitoring systems

Quality verification includes:
- Hardness testing across the component
- Microstructure examination
- Mechanical property verification
- Residual stress measurement
- Dimensional stability checks

Proper heat treatment can improve component life by 200-300% while ensuring consistent mechanical properties throughout the forged part.`,
      author: 'Priya Sharma',
      date: '2023-12-22',
      readTime: '7 min read',
      category: 'Materials',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['Heat Treatment', 'Mechanical Properties', 'Stainless Steel', 'Quality'],
      views: 920
    },
    {
      id: 11,
      title: 'Friction Forging Applications in Aerospace Industry',
      excerpt: 'Specialized applications of friction forging technology in aerospace component manufacturing with stringent quality requirements.',
      content: `Aerospace applications demand the highest quality standards, making friction forging an ideal process for critical components. The solid-state joining process eliminates many defects associated with fusion welding.

Aerospace applications:
- Engine components
- Landing gear parts
- Structural joints
- Fuel system components
- Control surface attachments

Quality requirements:
- 100% non-destructive testing
- Traceability documentation
- Material certification
- Process validation
- Statistical quality control

Friction forging advantages for aerospace:
- No porosity or inclusions
- Superior fatigue resistance
- Excellent corrosion resistance
- Precise dimensional control
- Reduced weight compared to mechanical joints

Certification processes include extensive testing, documentation, and approval by aerospace authorities. The process must demonstrate consistent quality and reliability under extreme operating conditions.

Recent developments include automation improvements, real-time monitoring systems, and advanced quality control methods that further enhance the reliability of friction forged aerospace components.`,
      author: 'Amit Kumar',
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'Friction Forging',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg',
      tags: ['Aerospace', 'Friction Forging', 'Quality', 'Certification'],
      views: 1180
    },
    {
      id: 12,
      title: 'Hammer Forging for Marine Applications: Corrosion Resistance',
      excerpt: 'How hammer forging produces superior marine components with exceptional corrosion resistance and mechanical properties.',
      content: `Marine environments present unique challenges requiring components with exceptional corrosion resistance and mechanical strength. Hammer forging produces parts that excel in these demanding conditions.

Marine environment challenges:
- Saltwater corrosion
- Cyclic loading from waves
- Temperature variations
- Biofouling effects
- Maintenance accessibility

Hammer forging benefits for marine:
- Refined grain structure for corrosion resistance
- Excellent mechanical properties
- Fatigue resistance for cyclic loading
- Large component capability
- Cost-effective production

Material selection for marine:
- SS316L for superior corrosion resistance
- Duplex stainless steels for high strength
- Nickel alloys for extreme environments
- Aluminum bronzes for propellers
- Titanium alloys for high-performance applications

Quality control for marine components includes salt spray testing, fatigue testing, and long-term exposure studies to validate performance in actual service conditions.

Case studies demonstrate the superior performance of hammer forged marine components compared to cast or machined alternatives.`,
      author: 'Vikram Singh',
      date: '2023-12-18',
      readTime: '5 min read',
      category: 'Hammer Forging',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      tags: ['Marine', 'Corrosion Resistance', 'Hammer Forging', 'Durability'],
      views: 850
    },
    {
      id: 13,
      title: 'Digital Transformation in Hot Forging Manufacturing',
      excerpt: 'How Industry 4.0 technologies are revolutionizing hot forging operations with smart manufacturing solutions.',
      content: `Digital transformation is reshaping the hot forging industry through the integration of Industry 4.0 technologies. Smart manufacturing solutions are improving efficiency, quality, and competitiveness.

Key technologies:
- Internet of Things (IoT) sensors
- Artificial intelligence and machine learning
- Digital twins and simulation
- Predictive maintenance systems
- Automated quality control

Benefits of digitalization:
- Real-time process monitoring
- Predictive quality control
- Reduced downtime
- Improved energy efficiency
- Enhanced traceability

Implementation strategies include gradual adoption, employee training, and integration with existing systems to maximize return on investment.`,
      author: 'Dr. Rajesh Patel',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Ring Rolling',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      tags: ['Digital Transformation', 'Industry 4.0', 'Smart Manufacturing', 'IoT'],
      views: 1100
    },
    {
      id: 14,
      title: 'Precision Forging for Medical Device Applications',
      excerpt: 'Specialized forging techniques for manufacturing critical medical device components with biocompatible materials.',
      content: `Medical device manufacturing requires exceptional precision and biocompatibility. Specialized forging techniques ensure components meet stringent medical standards.

Medical applications:
- Surgical instruments
- Implant components
- Diagnostic equipment parts
- Prosthetic components
- Dental instruments

Material requirements:
- Biocompatibility certification
- Corrosion resistance
- Sterilization compatibility
- Mechanical property consistency
- Traceability documentation

Quality standards include FDA regulations, ISO 13485, and medical device directives that govern manufacturing processes and documentation requirements.`,
      author: 'Neha Gupta',
      date: '2023-12-12',
      readTime: '7 min read',
      category: 'Quality Control',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['Medical Devices', 'Biocompatibility', 'Precision', 'FDA'],
      views: 980
    },
    {
      id: 15,
      title: 'Sustainable Forging: Environmental Impact Reduction Strategies',
      excerpt: 'Comprehensive approaches to reducing environmental impact in hot forging operations while maintaining productivity.',
      content: `Sustainability in hot forging involves reducing environmental impact through energy efficiency, waste reduction, and responsible resource management.

Environmental initiatives:
- Carbon footprint reduction
- Waste heat recovery
- Water conservation
- Material recycling
- Renewable energy adoption

Regulatory compliance includes environmental standards, emissions monitoring, and sustainability reporting requirements.

Benefits include cost savings, improved corporate image, and compliance with increasingly stringent environmental regulations.`,
      author: 'Ravi Mehta',
      date: '2023-12-10',
      readTime: '5 min read',
      category: 'Skew Press',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg',
      tags: ['Sustainability', 'Environment', 'Carbon Footprint', 'Green Manufacturing'],
      views: 890
    },
    {
      id: 16,
      title: 'Advanced Alloy Development for High-Temperature Applications',
      excerpt: 'Research and development of new alloy compositions for extreme temperature forging applications.',
      content: `Advanced alloy development focuses on creating materials that can withstand extreme temperatures while maintaining mechanical properties.

Research areas:
- Superalloy development
- High-temperature oxidation resistance
- Creep resistance improvement
- Thermal fatigue resistance
- Cost-effective alternatives

Applications include aerospace engines, power generation turbines, and industrial furnace components where extreme conditions demand superior materials.

Testing protocols ensure new alloys meet performance requirements under actual operating conditions.`,
      author: 'Amit Kumar',
      date: '2023-12-08',
      readTime: '8 min read',
      category: 'Friction Forging',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      tags: ['Alloy Development', 'High Temperature', 'Research', 'Superalloys'],
      views: 1200
    },
    {
      id: 17,
      title: 'Automation in Hot Forging: Robotics and AI Integration',
      excerpt: 'How robotics and artificial intelligence are transforming hot forging operations for improved safety and efficiency.',
      content: `Automation technologies are revolutionizing hot forging operations through robotics, AI, and advanced control systems.

Automation benefits:
- Improved safety for operators
- Consistent quality and repeatability
- Increased production efficiency
- Reduced labor costs
- Enhanced process monitoring

Implementation includes robotic handling systems, AI-powered quality control, and predictive maintenance systems that optimize operations.

Future developments focus on fully autonomous forging cells with minimal human intervention.`,
      author: 'Priya Sharma',
      date: '2023-12-05',
      readTime: '6 min read',
      category: 'Hammer Forging',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      tags: ['Automation', 'Robotics', 'AI', 'Safety'],
      views: 1150
    },
    {
      id: 18,
      title: 'Global Supply Chain Optimization for Forging Materials',
      excerpt: 'Strategies for optimizing global supply chains to ensure reliable material availability and cost control.',
      content: `Global supply chain optimization is critical for maintaining competitive advantage in the forging industry.

Supply chain challenges:
- Material availability fluctuations
- Price volatility
- Transportation costs
- Quality consistency
- Geopolitical factors

Optimization strategies include supplier diversification, strategic partnerships, inventory management, and risk mitigation plans.

Technology solutions enable real-time tracking, demand forecasting, and automated procurement processes.`,
      author: 'Sunita Rao',
      date: '2023-12-03',
      readTime: '5 min read',
      category: 'Materials',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['Supply Chain', 'Materials', 'Optimization', 'Global Trade'],
      views: 920
    }
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? allBlogPosts 
    : allBlogPosts.filter(post => post.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Handle category change
  const handleCategoryChange = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setSelectedPost(null);
  };

  // Handle post selection
  const handlePostClick = (post: React.SetStateAction<null>) => {
    setSelectedPost(post);
  };

  // Handle back to blog list
  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  // If a post is selected, show detailed view
  if (selectedPost) {
    return (
      <div className="min-h-screen pt-20">
        {/* Back Button */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleBackToBlog}
              className="flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </button>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedPost.readTime}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {selectedPost.views} views
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-black mb-6">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center justify-center space-x-6 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-black">{selectedPost.author}</div>
                    <div className="text-sm text-gray-500">{new Date(selectedPost.date).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {selectedPost.tags.map((tag: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-xl text-gray-600 mb-8 leading-relaxed">
                {selectedPost.excerpt}
              </div>
              
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedPost.content}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-black mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {allBlogPosts
                .filter(post => post.id !== selectedPost.id && post.category === selectedPost.category)
                .slice(0, 2)
                .map((post) => (
                  <div
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-black mb-2 line-clamp-2">{post.title}</h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-orange-500 font-medium text-sm">Read More</span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4">
              Expert Insights That Drive <span className="text-orange-500">Innovation And Progress</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover expert perspectives to spark ideas and strengthen your expertise in hot forging technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-3">
              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {currentPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-black mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <div className="flex items-center text-orange-500 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    Previous
                  </button>
                  
                  <div className="flex space-x-2">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                          currentPage === index + 1
                            ? 'bg-orange-500 text-white'
                            : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    Next
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-black mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => handleCategoryChange(category.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.name
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-50 hover:bg-orange-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className={`h-5 w-5 ${
                          selectedCategory === category.name ? 'text-white' : 'text-orange-500'
                        }`} />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        selectedCategory === category.name
                          ? 'bg-orange-600 text-white'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-black mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {allBlogPosts.slice(0, 4).map((post, index) => (
                    <div
                      key={index}
                      onClick={() => handlePostClick(post)}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors duration-300 cursor-pointer"
                    >
                      <h4 className="font-medium text-black text-sm line-clamp-2 mb-2">{post.title}</h4>
                      <div className="flex items-center justify-between text-gray-500 text-xs">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-black p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Subscribe to our newsletter for the latest industry insights and forging innovations.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-orange-500 focus:outline-none"
                  />
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-black mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Ring Rolling', 'SS304', 'SS316', 'Automotive', 'Quality Control', 'Innovation', 'Technology', 'Materials'].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-800 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;