export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#323261] mb-16">What Our Users Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "Restaurant Owner",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
              quote: "SpyDish has transformed how we understand our market position. The competitor analysis tools are invaluable."
            },
            {
              name: "Michael Rodriguez",
              role: "Food Enthusiast",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
              quote: "Finding great restaurants has never been easier. The personalized recommendations are always spot-on!"
            },
            {
              name: "Emma Thompson",
              role: "Restaurant Manager",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
              quote: "The weekly insights help us make data-driven decisions. Our revenue has increased by 30% since using SpyDish."
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-[#f1f1f6] p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#323261]">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
