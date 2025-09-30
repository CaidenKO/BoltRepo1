import React, { useState } from 'react';
import { Menu, X, Star, Calendar, Users, Trophy, Gamepad2, Zap, Shield, Crown, Sparkles } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const renderSection = () => {
    switch (activeTab) {
      case 'home': return renderHome();
      case 'portfolio': return renderPortfolio();
      case 'news': return renderNews();
      case 'contact': return renderContact();
      case 'pricing': return renderPricing();
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
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                { id: 'news', label: 'News' },
                { id: 'pricing', label: 'Pricing Plans' },
                { id: 'contact', label: 'Contact' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-purple-600 bg-purple-100'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold">GameDev Pro</span>
              </div>
              <p className="text-gray-400">
                Creating immersive gaming experiences that captivate and inspire players worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveTab('portfolio')} className="text-gray-400 hover:text-white transition-colors">Portfolio</button></li>
                <li><button onClick={() => setActiveTab('news')} className="text-gray-400 hover:text-white transition-colors">News</button></li>
                <li><button onClick={() => setActiveTab('pricing')} className="text-gray-400 hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => setActiveTab('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">
                Follow my journey and get updates on the latest projects.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GameDev Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;