'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-700 via-blue-500 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-bold text-white">Shehroz Khan</h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold text-white">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative group transition hover:text-yellow-300"
            >
              <span className="relative z-10">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-black/80 backdrop-blur text-white border-t border-white/20">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-lg font-medium hover:text-yellow-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
