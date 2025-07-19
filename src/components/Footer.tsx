import { Bot, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#f1f1f6] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-[#323261]" />
              <span className="text-2xl font-bold text-[#323261]">SpyDish</span>
            </div>
            <p className="text-gray-600">
              Connecting restaurants and diners through intelligent technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#323261] mb-4">For Diners</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Find Restaurants</li>
              <li>Read Reviews</li>
              <li>Featured Menus</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#323261] mb-4">For Restaurants</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Pro Plan</li>
              <li>Analytics</li>
              <li>Weekly Reports</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#323261] mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#323261]" />
              <Twitter className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#323261]" />
              <Instagram className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#323261]" />
              <Linkedin className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#323261]" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} SpyDish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
