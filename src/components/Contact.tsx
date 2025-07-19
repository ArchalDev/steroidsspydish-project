import { Mail, MessageSquare, Phone } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="py-20 bg-[#323261]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Get In Touch</h2>
          <p className="text-center text-white/80 mb-12">Have questions? We'd love to hear from you.</p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 placeholder-white/60"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 placeholder-white/60"
            />
            <textarea
              placeholder="Message"
              className="md:col-span-2 bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 placeholder-white/60 h-32"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 bg-white text-[#323261] py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-white/80">gaorgaoe@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-white/80">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">WhatsApp</h4>
                <p className="text-white/80">Start chatting now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
