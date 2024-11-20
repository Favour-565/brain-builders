"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { NavItem } from '../components/NavItem';
import { Button } from '../components/Button';
import { navItems } from '../data/data';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex z-10 p-5 bg-white shadow-md">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="relative w-28 h-12">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e44bff3180bf3bb3475993403bb377444d3b1d3085e5bcd529c0d36e65480d30?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345"
            alt="Company Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-5 font-bold text-gray-800">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex gap-4">
          <Button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </Button>
          <Button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Sign-up for Free
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 bg-gray-100 rounded-md focus:outline-none focus:ring"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-20 bg-white shadow-lg md:hidden w-full h-full max-w-lg mx-auto">
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleMenu}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6 items-center mt-16">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8 px-5">
            <Button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Login
            </Button>
            <Button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Sign-up for Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
