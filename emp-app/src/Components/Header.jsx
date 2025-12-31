import React from 'react';
import { Link } from "react-router-dom";
import { User, LayoutDashboard, Users, Home, Info } from 'lucide-react';

const Header = ({ userName = "Admin User" }) => {

  const navItems = [
    { name: "Home", to: "/", Icon: Home },
    { name: "About", to: "/about", Icon: Info },
    { name: "Employees", to: "/employees", Icon: Users },
    { name: "Dashboard", to: "/dashboard", Icon: LayoutDashboard },
  ];

  return (
    <header className="bg-white text-[#1f2937] shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl text-[#3B82F6] font-extrabold tracking-wider">
            NeXuS </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-[#EFF6FF] hover:text-[#3B82F6] transition duration-300 group"
            >
              <item.Icon className="w-5 h-5 text-gray-500 group-hover:text-[#3B82F6]" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Profile Section */}
        <div className="flex items-center space-x-4">

          <div className="flex items-center space-x-2 bg-[#EFF6FF] p-2 rounded-full pr-4 shadow-sm border border-[#dbeafe]">
            <Link
              to="/profile"
              className="p-2 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] transition duration-200"
              title="View Profile"
            >
              <User className="w-5 h-5 text-white" />
            </Link>

            <span className="hidden lg:inline text-sm text-gray-700">
              Welcome, <span className="font-semibold">{userName}</span>
            </span>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden text-gray-700 text-2xl p-2 rounded-md hover:bg-[#EFF6FF] transition duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16">
              </path>
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
