import { NavLink } from 'react-router-dom';
import { Menu, X, Globe2 } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Directory', href: '/directory' },
  { name: 'Resources', href: '/resources' },
  { name: 'Opportunities', href: '/opportunities' },
  { name: 'Forum', href: '/forum' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">ZimRussia Hub</span>
            <div className="bg-gray-100 p-2 rounded-full border-2 border-white flex items-center justify-center font-bold text-brand-green">
              ZR
            </div>
          </NavLink>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest font-bold transition-colors ${
                  isActive 
                    ? 'text-brand-green' 
                    : 'text-gray-500 hover:text-gray-900'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
          <button className="text-xs uppercase tracking-widest font-bold leading-6 text-gray-900 hover:text-brand-green transition-colors">
            Log in
          </button>
          <button className="rounded-full bg-brand-green px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-sm hover:bg-opacity-90 transition-colors">
            Join
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-40 bg-black/20" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="bg-gray-100 p-2 rounded-full border-2 border-white flex items-center justify-center font-bold text-brand-green">
                  ZR
                </div>
              </NavLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `-mx-3 block rounded-lg px-3 py-2 text-sm uppercase tracking-widest font-bold leading-7 ${
                          isActive ? 'bg-gray-50 text-brand-green' : 'text-gray-900 hover:bg-gray-50'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6 flex flex-col gap-3">
                  <button className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm uppercase tracking-widest font-bold leading-6 text-gray-900 text-center hover:bg-gray-200">
                    Log in
                  </button>
                  <button className="w-full rounded-full bg-brand-green px-4 py-2 text-sm uppercase tracking-widest font-bold text-white shadow-sm hover:bg-opacity-90 text-center">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
