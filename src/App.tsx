import React, { useState } from 'react';
import { Menu, X, Star, Calendar, Users, Trophy, Gamepad2, Zap, Shield, Crown, Sparkles } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [orderComplete, setOrderComplete] = useState(false);

  const shopItems = [
    {
      id: 1,
      name: 'GameDev Hoodie',
      category: 'Clothing',
      price: 49.99,
      originalPrice: 69.99,
      discount: '29% OFF',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Premium quality hoodie with embroidered GameDev logo. Perfect for coding sessions.',
      features: ['100% Cotton', 'Embroidered Logo', 'Kangaroo Pocket', 'Unisex Fit']
    },
    {
      id: 2,
      name: 'Unity Mastery Pack',
      category: 'Coding Tips',
      price: 29.99,
      originalPrice: 49.99,
      discount: '40% OFF',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete Unity development guide with 50+ advanced tips and tricks.',
      features: ['50+ Pro Tips', 'Video Tutorials', 'Source Code', 'Lifetime Updates'],
      detailedDescription: 'Master Unity game development with our comprehensive guide featuring advanced techniques, optimization strategies, and professional workflows. Includes exclusive video content, downloadable source code, and regular updates with new Unity features.',
      specifications: ['PDF Format: 200+ pages', 'Video Content: 10+ hours', 'Source Files: 25+ projects', 'Updates: Lifetime access']
    },
    {
      id: 3,
      name: 'Game Design Notebook',
      category: 'Notebooks',
      price: 19.99,
      originalPrice: 24.99,
      discount: '20% OFF',
      image: 'https://images.pexels.com/photos/159832/book-address-book-learning-learn-159832.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional game design notebook with templates and planning sheets.',
      features: ['200 Pages', 'Design Templates', 'Hardcover', 'Dot Grid Pages']
    },
    {
      id: 4,
      name: 'Pixel Art T-Shirt',
      category: 'Clothing',
      price: 24.99,
      originalPrice: 34.99,
      discount: '29% OFF',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Retro pixel art design t-shirt for indie game developers.',
      features: ['Soft Cotton Blend', 'Vintage Design', 'Multiple Sizes', 'Machine Washable'],
      detailedDescription: 'Show your indie game developer pride with this premium pixel art t-shirt. Features a unique 8-bit inspired design that celebrates retro gaming culture. Made from ultra-soft cotton blend for maximum comfort during long coding sessions.',
      specifications: ['Material: 60% Cotton, 40% Polyester', 'Sizes: XS - 3XL', 'Print: High-quality screen print', 'Care: Machine washable']
    },
    {
      id: 5,
      name: 'C# Cheat Sheet Pack',
      category: 'Coding Tips',
      price: 14.99,
      originalPrice: 19.99,
      discount: '25% OFF',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Essential C# reference cards for game development.',
      features: ['Quick Reference', 'Printable PDF', 'Syntax Examples', 'Best Practices']
    },
    {
      id: 6,
      name: 'Game Dev Sticker Pack',
      category: 'Accessories',
      price: 9.99,
      originalPrice: 14.99,
      discount: '33% OFF',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Collection of 20 premium vinyl stickers for your laptop and gear.',
      features: ['20 Unique Designs', 'Waterproof Vinyl', 'High Quality Print', 'Perfect for Laptops']
    }
  ];

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const startFreeTrial = (planName) => {
    alert(`🎉 Awesome! You've started your 7-day free trial for ${planName}!\n\nWhat happens next:\n✅ Full access to all features\n✅ No credit card required\n✅ Cancel anytime\n\nWe'll send you an email with your login details shortly!`);
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Mystic Realms',
      category: 'RPG',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'An epic fantasy RPG with immersive storytelling and stunning visuals.',
      technologies: ['Unity', 'C#', 'Blender'],
      status: 'Released'
    },
    {
      id: 2,
      title: 'Neon Runner',
      category: 'Action',
      image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Fast-paced cyberpunk runner with dynamic lighting effects.',
      technologies: ['Unreal Engine', 'Blueprint', 'Substance'],
      status: 'In Development'
    },
    {
      id: 3,
      title: 'Puzzle Nexus',
      category: 'Puzzle',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mind-bending puzzle game with innovative mechanics.',
      technologies: ['Unity', 'C#', 'Photoshop'],
      status: 'Released'
    }
  ];

  const newsItems = [
    {
      id: 1,
      date: '2024-01-15',
      title: 'New Project Announcement',
      excerpt: 'Excited to announce our latest RPG project featuring cutting-edge graphics.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      date: '2024-01-10',
      title: 'Award Recognition',
      excerpt: 'Our puzzle game won the Indie Game Developer Award for innovation.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      date: '2025-09-26',
      title: 'None Yet',
      excerpt: 'coming soon',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
  ];

  const renderHome = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            Game Designer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Crafting immersive worlds and unforgettable gaming experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('portfolio')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className="px-8 py-4 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 8 years of experience in game design and development, I specialize in creating 
              engaging gameplay mechanics, compelling narratives, and visually stunning worlds that 
              captivate players.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-purple-100 rounded-lg">
                <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="font-bold text-2xl text-purple-600">15+</div>
                <div className="text-sm text-gray-600">Games Released</div>
              </div>
              <div className="text-center p-4 bg-blue-100 rounded-lg">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-2xl text-blue-600">2M+</div>
                <div className="text-sm text-gray-600">Players Reached</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Game Development" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg shadow-lg">
              <Gamepad2 className="w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Game Design', skills: ['Level Design', 'Gameplay Mechanics', 'User Experience', 'Balancing'], icon: Gamepad2 },
              { title: 'Development', skills: ['Unity', 'Unreal Engine', 'C#', 'Blueprint'], icon: Zap },
              { title: 'Art & Design', skills: ['3D Modeling', 'Texturing', 'Animation', 'UI/UX'], icon: Sparkles }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <category.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-800">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderPortfolio = () => (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Portfolio</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  item.status === 'Released' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-purple-600 font-semibold mb-2">{item.category}</p>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest News</h2>
      <div className="space-y-8">
        {newsItems.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <img src={item.image} alt={item.title} className="w-full md:w-48 h-48 object-cover" />
              <div className="p-6 flex-1">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.excerpt}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Let's Work Together</h3>
          <p className="text-gray-600 mb-6">
            I'm always excited to collaborate on new projects and bring creative visions to life. 
            Whether you need game design consultation, development services, or creative direction, 
            I'd love to hear from you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Collaboration</div>
                <div className="text-gray-600">Open to partnerships</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Quick Response</div>
                <div className="text-gray-600">24-48 hour reply time</div>
              </div>
            </div>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );

  const renderPricing = () => (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Epic Pricing Plans
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Choose your adventure! Professional game development services with unbeatable value.
        </p>
        <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse">
          🚀 Launch Week Special: 50% OFF First Month!
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8 mb-16">
        {/* Pixel Pioneer */}
        <div className="relative bg-white rounded-2xl shadow-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              39% OFF
            </span>
          </div>
          <div className="p-8">
            <div className="text-center mb-6">
              <Gamepad2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Pixel Pioneer</h3>
              <p className="text-gray-600">Perfect for indie developers</p>
            </div>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-gray-800">$79</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="line-through">$129</span> - Save $50/month
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">20 development hours</span>
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Basic support (48h response)</span>
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Asset library access</span>
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Monthly progress reports</span>
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">7-day free trial</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Game Forge Master */}
        <div className="relative bg-white rounded-2xl shadow-xl border-4 border-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              MOST POPULAR - 29% OFF
            </span>
          </div>
          <div className="p-8">
            <div className="text-center mb-6">
              <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Game Forge Master</h3>
              <p className="text-gray-600">For serious game developers</p>
            </div>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-purple-600">$249</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="line-through">$349</span> - Save $100/month
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Crown className="w-5 h-5 text-gold-500 mr-3" />
                <span className="text-gray-700">60 development hours</span>
              </li>
              <li className="flex items-center">
                <Crown className="w-5 h-5 text-gold-500 mr-3" />
                <span className="text-gray-700">Priority support (24h response)</span>
              </li>
              <li className="flex items-center">
                <Crown className="w-5 h-5 text-gold-500 mr-3" />
                <span className="text-gray-700">Premium asset library</span>
              </li>
              <li className="flex items-center">
                <Crown className="w-5 h-5 text-gold-500 mr-3" />
                <span className="text-gray-700">Weekly progress calls</span>
              </li>
              <li className="flex items-center">
                <Crown className="w-5 h-5 text-gold-500 mr-3" />
                <span className="text-gray-700">Code reviews & optimization</span>
              </li>
              <li className="flex items-center">
                <Crown className="w-5 h-5 text-gold-500 mr-3" />
                <span className="text-gray-700">7-day free trial</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Legend Creator */}
        <div className="relative bg-white rounded-2xl shadow-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              33% OFF
            </span>
          </div>
          <div className="p-8">
            <div className="text-center mb-6">
              <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Legend Creator</h3>
              <p className="text-gray-600">AAA-quality productions</p>
            </div>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-gray-800">$599</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="line-through">$899</span> - Save $300/month
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Sparkles className="w-5 h-5 text-purple-500 mr-3" />
                <span className="text-gray-700">120 development hours</span>
              </li>
              <li className="flex items-center">
                <Sparkles className="w-5 h-5 text-purple-500 mr-3" />
                <span className="text-gray-700">VIP support (12h response)</span>
              </li>
              <li className="flex items-center">
                <Sparkles className="w-5 h-5 text-purple-500 mr-3" />
                <span className="text-gray-700">Exclusive asset library</span>
              </li>
              <li className="flex items-center">
                <Sparkles className="w-5 h-5 text-purple-500 mr-3" />
                <span className="text-gray-700">Daily progress updates</span>
              </li>
              <li className="flex items-center">
                <Sparkles className="w-5 h-5 text-purple-500 mr-3" />
                <span className="text-gray-700">Dedicated project manager</span>
              </li>
              <li className="flex items-center">
                <Sparkles className="w-5 h-5 text-purple-500 mr-3" />
                <span className="text-gray-700">7-day free trial</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Studio Empire */}
        <div className="relative bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl shadow-xl text-white hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              BEST VALUE
            </span>
          </div>
          <div className="p-8">
            <div className="text-center mb-6">
              <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Studio Empire</h3>
              <p className="text-purple-200">Enterprise solution</p>
            </div>
            <div className="text-center mb-6">
              <div className="text-2xl font-bold mb-2">Custom Pricing</div>
              <div className="text-sm text-purple-200">Tailored to your needs</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-3" />
                <span>Unlimited development hours</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-3" />
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-3" />
                <span>Full asset library access</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-3" />
                <span>Dedicated development team</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-3" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-3" />
                <span>White-label solutions</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">🎯 Refer & Earn</h3>
          <p className="mb-4">
            Refer a friend and both of you get a FREE month when they subscribe to any plan!
          </p>
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Referring
          </button>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">💰 Money-Back Guarantee</h3>
          <p className="mb-4">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {[
            {
              q: "🎮 Can I change my plan anytime?",
              a: "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect immediately, and we'll prorate any differences."
            },
            {
              q: "⏰ What happens to unused hours?",
              a: "Unused development hours roll over to the next month (up to 50% of your monthly allocation). This ensures you never lose the value you've paid for."
            },
            {
              q: "🚀 Do you offer custom game development?",
              a: "Yes! All our plans include custom game development services. Higher tiers get more hours and priority support for faster delivery."
            },
            {
              q: "💎 What's included in the asset library?",
              a: "Our asset library includes 3D models, textures, sound effects, music tracks, and code snippets. Higher tiers get access to premium and exclusive content."
            },
            {
              q: "🛡️ Is there a money-back guarantee?",
              a: "Yes! We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied, we'll refund your payment in full."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg text-gray-800 mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          GameDev Shop
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Premium gear and resources for game developers
        </p>
        <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
          🎉 Free Shipping on Orders Over $50!
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['All', 'Clothing', 'Coding Tips', 'Notebooks', 'Accessories'].map((category) => (
          <button
            key={category}
            className="px-6 py-2 bg-white border-2 border-purple-200 rounded-full font-semibold text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Shop Items Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {shopItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                {item.discount}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              
              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-purple-600">${item.price}</span>
                    <span className="text-gray-500 line-through">${item.originalPrice}</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    Save ${(item.originalPrice - item.price).toFixed(2)}
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 text-sm"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Offers */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">🎁 Bundle Deal</h3>
          <p className="mb-4">
            Buy 3 or more items and get an extra 20% off your entire order!
          </p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">🚚 Free Shipping</h3>
          <p className="mb-4">
            Get free shipping on all orders over $50. No minimum quantity required!
          </p>
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Shopping Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-800">Shopping Cart</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-600 text-lg">Your cart is empty</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <p className="text-purple-600 font-bold">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 font-bold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-gray-800">Total: ${getTotalPrice()}</span>
                      <span className="text-gray-600">({getTotalItems()} items)</span>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setShowCart(false)}
                        className="flex-1 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                      >
                        Continue Shopping
                      </button>
                      <button
                        onClick={() => {
                          alert(`🎉 Order placed successfully!\n\nTotal: $${getTotalPrice()}\nItems: ${getTotalItems()}\n\nThank you for your purchase!`);
                          setCart([]);
                          setShowCart(false);
                        }}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSection = () => {
    switch (activeTab) {
      case 'home': return renderHome();
      case 'portfolio': return renderPortfolio();
      case 'news': return renderNews();
      case 'contact': return renderContact();
      case 'pricing': return renderPricing();
      case 'shop': return renderShop();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-800">GameDev Pro</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'news', label: 'News' },
                { id: 'pricing', label: 'Pricing Plans' },
                { id: 'shop', label: 'Shop' },
                { id: 'contact', label: 'Contact' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-purple-600 bg-purple-100'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              
              {/* Cart Button */}
              <button
                onClick={() => setShowCart(true)}
                className="relative px-3 py-2 rounded-md font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center space-x-1">
                  <span>🛒</span>
                  <span>Cart</span>
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
    {/* Product Details Modal */}
    {selectedProduct && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">

            {/* Mobile menu button */}
              <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-700 hover:text-purple-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {[
                { id: 'home', label: 'Home' },
                { id: 'portfolio', label: 'Portfolio' },
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-purple-600">${selectedProduct.price}</span>
                      <span className="text-gray-500 line-through">${selectedProduct.originalPrice}</span>
                    </div>
                    <div className="text-lg text-green-600 font-semibold">
                      {selectedProduct.discount} - Save ${(selectedProduct.originalPrice - selectedProduct.price).toFixed(2)}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full font-semibold">
                    {selectedProduct.category}
                  </span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Product Description</h4>
                <p className="text-gray-600 mb-6">
                  {selectedProduct.detailedDescription || selectedProduct.description}
                </p>
                
                <h4 className="text-xl font-bold text-gray-800 mb-4">Features</h4>
                <ul className="space-y-2 mb-6">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {selectedProduct.specifications && (
                  <>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Specifications</h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProduct.specifications.map((spec, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Shopping Cart Sidebar */}
    {showCart && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
        <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
          <div className="flex flex-col h-full">
            <div className="p-6 border-b bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Shopping Cart</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-purple-100 mt-2">{getTotalItems()} items • ${getTotalPrice()}</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                          <p className="text-purple-600 font-bold">${item.price}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 text-sm"
                              >
                                -
                              </button>
                              <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 text-sm"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 text-sm font-medium"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="border-t p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-gray-800">Total: ${getTotalPrice()}</span>
                  <span className="text-gray-600">({getTotalItems()} items)</span>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => setShowCart(false)}
                    className="w-full px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Continue Shopping
                  </button>
                  <button
                    onClick={() => {
                      setShowCart(false);
                      setShowCheckout(true);
                    }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )}

    {/* Checkout Modal */}
    {showCheckout && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Secure Checkout</h3>
              <button
                onClick={() => setShowCheckout(false)}
                className="text-white hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-purple-100 mt-2">Complete your order securely</p>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h4>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                            <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-bold text-purple-600">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">Total</span>
                      <span className="text-2xl font-bold text-purple-600">${getTotalPrice()}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{getTotalItems()} items</p>
                  </div>
                </div>
              </div>
              
              {/* Customer Information */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Customer Information</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      📧 Order confirmation will be sent to this email
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-green-700">
                      <span>🔒</span>
                      <span className="font-semibold">Secure Payment</span>
                    </div>
                    <p className="text-green-600 text-sm mt-1">
                      Your information is protected with 256-bit SSL encryption
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-blue-700">
                      <span>📦</span>
                      <span className="font-semibold">Digital Delivery</span>
                    </div>
                    <p className="text-blue-600 text-sm mt-1">
                      Digital items will be delivered instantly to your email
                    </p>
                  </div>
                </form>
                
                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Back to Cart
                  </button>
                  <button
                    onClick={processOrder}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Complete Order - ${getTotalPrice()}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;