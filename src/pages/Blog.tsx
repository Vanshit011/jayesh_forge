import React from 'react';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Flame, Cog, Globe } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Hot Forging: Advanced Technologies and Sustainable Practices',
    excerpt: 'Explore how cutting-edge technologies and eco-friendly practices are revolutionizing the hot forging industry, from AI-driven quality control to energy-efficient heating systems.',
    content: 'The hot forging industry is experiencing a technological renaissance, with innovations that promise to reshape manufacturing processes while addressing environmental concerns...',
    author: 'Dr. Rajesh Patel',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    tags: ['Technology', 'Sustainability', 'Innovation', 'Hot Forging']
  };

  const blogPosts = [
    {
      id: 2,
      title: 'SS304 vs SS316: Choosing the Right Stainless Steel for Your Application',
      excerpt: 'A comprehensive comparison of SS304 and SS316 stainless steel grades, their properties, applications, and cost considerations for hot forging projects.',
      author: 'Priya Sharma',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Materials',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['SS304', 'SS316', 'Materials', 'Selection Guide']
    },
    {
      id: 3,
      title: 'Automotive Industry Trends: Electric Vehicle Impact on Forging',
      excerpt: 'How the electric vehicle revolution is creating new opportunities and challenges for the automotive forging industry.',
      author: 'Amit Kumar',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Automotive',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg',
      tags: ['Automotive', 'Electric Vehicles', 'Industry Trends']
    },
    {
      id: 4,
      title: 'Quality Control in Hot Forging: Best Practices and Standards',
      excerpt: 'Essential quality control measures and international standards that ensure superior hot forging results.',
      author: 'Neha Gupta',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Quality',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg',
      tags: ['Quality Control', 'Standards', 'Best Practices']
    },
    {
      id: 5,
      title: 'Ring Rolling Technology: Advantages and Applications',
      excerpt: 'Deep dive into ring rolling technology, its benefits over traditional forging methods, and key applications across industries.',
      author: 'Vikram Singh',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      tags: ['Ring Rolling', 'Technology', 'Applications']
    },
    {
      id: 6,
      title: 'Export Opportunities for Indian Forging Companies',
      excerpt: 'Exploring global market opportunities and export strategies for Indian hot forging manufacturers.',
      author: 'Sunita Rao',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Business',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      tags: ['Export', 'Global Markets', 'Business Strategy']
    },
    {
      id: 7,
      title: 'Energy Efficiency in Hot Forging Operations',
      excerpt: 'Strategies and technologies to reduce energy consumption while maintaining quality in hot forging processes.',
      author: 'Ravi Mehta',
      date: '2024-01-01',
      readTime: '4 min read',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['Energy Efficiency', 'Sustainability', 'Cost Reduction']
    }
  ];

  const categories = [
    { name: 'Technology', count: 12, icon: Cog },
    { name: 'Materials', count: 8, icon: Flame },
    { name: 'Automotive', count: 6, icon: TrendingUp },
    { name: 'Quality', count: 5, icon: Globe },
    { name: 'Business', count: 4, icon: User },
    { name: 'Sustainability', count: 3, icon: Globe }
  ];

  const recentPosts = [
    'Advanced Ring Rolling Technology Implementation',
    'Automotive Industry Growth in Hot Forging',
    'Sustainability in Hot Forging Processes',
    'Export Opportunities for Indian Forging Industry'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4">
              Forging <span className="text-orange-500">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, technologies, and insights in the hot forging industry. 
              Expert articles, industry news, and technical guides from Jayesh Forge.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-black mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black">{featuredPost.author}</div>
                      <div className="text-sm text-gray-500">{new Date(featuredPost.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
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
                      
                      <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {tag}
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
                        <button className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors duration-300">
                          Read More
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors duration-300 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <category.icon className="h-5 w-5 text-orange-500" />
                        <span className="font-medium text-black">{category.name}</span>
                      </div>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors duration-300 cursor-pointer">
                      <h4 className="font-medium text-black text-sm line-clamp-2">{post}</h4>
                      <div className="flex items-center text-gray-500 text-xs mt-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(Date.now() - index * 24 * 60 * 60 * 1000).toLocaleDateString()}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;