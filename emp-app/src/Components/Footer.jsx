import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f1e9e9] text-gray-700 py-8 mt-10 border-t border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Left - Branding */}
          <h2 className="text-lg font-semibold text-[#3B82F6] tracking-wide">
            Employee Management System
          </h2>

          {/* Center - Navigation */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <a href="/privacy" className="hover:text-[#2563EB] transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[#2563EB] transition">
                Terms
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#2563EB] transition">
                Contact
              </a>
            </li>
          </ul>

        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-gray-500 mt-6 pt-4 border-t border-gray-200">
          © {new Date().getFullYear()} EMS Portal — All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
