import { ChefHat, Map, MessageSquare, PieChart, Search, TrendingUp } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-20 bg-[#f1f1f6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#323261] mb-4">Powerful Features for Everyone</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a diner looking for your next meal or a restaurant owner seeking growth,
            SpyDish has the tools you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#4c4c96] mb-6">For Diners</h3>
            <div className="space-y-6">
              {[
                { icon: Search, title: "Explore Restaurants", desc: "Find perfect dining spots based on your preferences" },
                { icon: ChefHat, title: "Featured Menus", desc: "Discover special dishes and trending items" },
                { icon: MessageSquare, title: "Access Reviews", desc: "Make informed decisions with genuine user feedback" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 bg-[#4c4c96]/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-[#4c4c96]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#4c4c96] mb-6">For Restaurants</h3>
            <div className="space-y-6">
              {[
                { icon: PieChart, title: "Data Analysis", desc: "Track competitor pricing and customer sentiment" },
                { icon: Map, title: "Interest Heatmaps", desc: "Visualize customer demand patterns" },
                { icon: TrendingUp, title: "Weekly Reports", desc: "Get actionable insights delivered to your inbox" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 bg-[#4c4c96]/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-[#4c4c96]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
