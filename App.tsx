
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Button } from './components/ui/Button';
import { BRAND_NAME, CONTACT_INFO, HQ_ADDRESS } from './constants';
import { trackFunnelClick } from './services/analytics';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-surface-50/95 backdrop-blur-md border-b border-border-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-ink-900 rounded-lg flex items-center justify-center font-bold text-white text-sm font-heading">I</div>
            <span className="font-heading font-bold text-ink-900 text-base hidden sm:block leading-tight">
              Isibonelo<br/><span className="font-medium text-ink-700 text-xs">Property Services</span>
            </span>
            <span className="font-heading font-bold text-ink-900 text-base block sm:hidden">Isibonelo</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-ink-900 flex items-center gap-1.5 ${location.pathname === link.path ? 'text-ink-900' : 'text-ink-700/70'}`}
              >
                {location.pathname === link.path && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 inline-block"></span>
                )}
                {link.name}
              </Link>
            ))}
            <Button size="sm" onClick={() => window.open(CONTACT_INFO.booking, '_blank')}>Book Consult</Button>
          </div>

          {/* Hamburger */}
          <button className="md:hidden p-2 text-ink-900" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-50 border-b border-border-200 py-4 animate-slideDown">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 text-sm font-medium hover:bg-white transition-colors ${location.pathname === link.path ? 'text-brand-600' : 'text-ink-700'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-6 mt-4">
            <Button fullWidth onClick={() => window.open(CONTACT_INFO.booking, '_blank')}>Book Consult</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-ink-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center font-bold text-white text-sm font-heading">I</div>
            <span className="font-heading font-bold text-xl">{BRAND_NAME}</span>
          </div>
          <p className="text-gray-400 max-w-sm mb-6 text-sm leading-relaxed">
            Leaving an indelible fingerprint on everything we touch through strategic property development and management.
          </p>
          <Button onClick={() => trackFunnelClick('A', 'footer')} size="sm">Request a Mandate</Button>
        </div>

        <div>
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-brand-600 mb-4">Company</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">POPIA Notice</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-brand-600 mb-4">Headquarters</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {HQ_ADDRESS}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Email: {CONTACT_INFO.email}<br />
            Phone: {CONTACT_INFO.phone}
          </p>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
        <p>Pretoria, South Africa · Est. 1999</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
