import { Globe2, Mail, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gray-100 p-1.5 rounded-full border-2 border-white flex items-center justify-center font-bold text-brand-green">
                ZR
              </div>
              <span className="font-display font-medium text-lg text-gray-900">ZimRussia Hub</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              A central hub for Zimbabweans in Russia to find support, opportunities, and community.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display tracking-widest uppercase text-xs text-gray-900 font-bold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/directory" className="text-sm text-gray-500 hover:text-brand-green transition-colors">Directory</Link></li>
              <li><Link to="/opportunities" className="text-sm text-gray-500 hover:text-brand-green transition-colors">Opportunities</Link></li>
              <li><Link to="/forum" className="text-sm text-gray-500 hover:text-brand-green transition-colors">Discussions</Link></li>
              <li><Link to="/events" className="text-sm text-gray-500 hover:text-brand-green transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display tracking-widest uppercase text-xs text-gray-900 font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/resources/visa" className="text-sm text-gray-500 hover:text-brand-green transition-colors">Visa Guide</Link></li>
              <li><Link to="/resources/housing" className="text-sm text-gray-500 hover:text-brand-green transition-colors">Housing Assistance</Link></li>
              <li><Link to="/resources/universities" className="text-sm text-gray-500 hover:text-brand-green transition-colors">University Tips</Link></li>
              <li><Link to="/resources/survival" className="text-sm text-gray-500 hover:text-brand-green transition-colors">First 30 Days</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display tracking-widest uppercase text-xs text-gray-900 font-bold mb-4">Legal & About</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-brand-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-500 hover:text-brand-green transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-500 hover:text-brand-green transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-bold text-center">
            &copy; {new Date().getFullYear()} ZimRussia Hub. Official Diaspora Support Network.
          </p>
        </div>
      </div>
    </footer>
  );
}
