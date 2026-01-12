import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "/menu", label: "Menú" },
  { path: "/cafe", label: "Café" },
  { path: "/unete", label: "Únete" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="container px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-groovy text-2xl md:text-3xl text-cream">
          La Guapa
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm uppercase tracking-widest transition-all duration-300 relative group ${
                location.pathname === link.path ? "text-cream" : "text-cream/60 hover:text-cream"
              }`}
            >
              {link.label}
              {/* Underline effect */}
              <span 
                className={`absolute -bottom-1 left-0 h-0.5 bg-retro-red transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`} 
              />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-forest/95 backdrop-blur-lg border-b border-border"
          >
            <div className="container px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-lg py-2 border-b border-border/50 ${
                    location.pathname === link.path ? "text-primary" : "text-cream/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
