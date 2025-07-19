import { Bot, BarChart, MapPin, MessageSquare, Search, Star, TrendingUp, Users } from 'lucide-react'

const App = () => {
  return (
    <div className="min-h-screen bg-[#f1f1f6]">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
            alt="Restaurant background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#323261]/90 to-[#f1f1f6]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-8">
            <Bot className="w-12 h-12 text-[#323261]" />
            <h1 className="text-4xl md:text-6xl font-bold text-[#4c4c96] ml-3">SpyDish</h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
            Intelligent WhatsApp Bot for Restaurants and Diners
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with restaurants, get personalized recommendations, and optimize your restaurant management with AI-powered insights.
          </p>
          <a 
            href="https://wa.me/message" 
            className="inline-flex items-center px-8 py-4 bg-[#323261] text-white rounded-full text-lg font-semibold hover:bg-[#4c4c96] transition-colors"
          >
            <MessageSquare className="mr-2" />
            Start Now with WhatsApp
          </a>
        </div>
      </header>

      {/* Diners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#323261] mb-16">For Diners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#f1f1f6] text-center">
              <Search className="w-12 h-12 text-[#4c4c96] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Explore Restaurants</h3>
              <p className="text-gray-600">Discover restaurants based on your preferences and location</p>
            </div>
            <div className="p-6 rounded-xl bg-[#f1f1f6] text-center">
              <Star className="w-12 h-12 text-[#4c4c96] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Featured Dishes</h3>
              <p className="text-gray-600">Access curated menus and special offerings in your area</p>
            </div>
            <div className="p-6 rounded-xl bg-[#f1f1f6] text-center">
              <MessageSquare className="w-12 h-12 text-[#4c4c96] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reviews & Rankings</h3>
              <p className="text-gray-600">Make informed decisions with community reviews and ratings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-20 bg-[#323261]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">For Restaurants</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur text-white">
              <BarChart className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Pricing Intelligence</h3>
              <p className="text-white/80">Compare menu prices with local competitors in real-time</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur text-white">
              <TrendingUp className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Dish Ranking</h3>
              <p className="text-white/80">Track how your dishes rank against nearby restaurants</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur text-white">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Interest Heatmaps</h3>
              <p className="text-white/80">Identify peak demand and search trends</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur text-white">
              <Users className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Campaigns</h3>
              <p className="text-white/80">Optimize advertising with smart recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#323261] mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-[#f1f1f6]">
              <p className="text-gray-600 mb-4">"SpyDish has transformed how we manage our restaurant. The pricing intelligence feature alone has helped us optimize our menu pricing significantly."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" alt="User" className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Chen</h4>
                  <p className="text-sm text-gray-500">Restaurant Owner</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-[#f1f1f6]">
              <p className="text-gray-600 mb-4">"As a foodie, I love how easy it is to discover new restaurants and dishes. The recommendations are always spot-on!"</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" alt="User" className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-500">Food Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#f1f1f6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#323261] mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of restaurants and diners already using SpyDish
          </p>
          <a 
            href="https://wa.me/message" 
            className="inline-flex items-center px-8 py-4 bg-[#323261] text-white rounded-full text-lg font-semibold hover:bg-[#4c4c96] transition-colors"
          >
            <MessageSquare className="mr-2" />
            Connect on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#323261] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <Bot className="w-8 h-8" />
              <span className="ml-2 text-xl font-semibold">SpyDish</span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="mailto:gaorgaoe@gmail.com" className="hover:text-gray-300">Contact</a>
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-white/60">
            © {new Date().getFullYear()} SpyDish. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
