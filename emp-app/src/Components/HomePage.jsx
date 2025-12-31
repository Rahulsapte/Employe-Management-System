import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f0ebeb]">

      {/* ⭐ HERO SECTION */}
      <div
        className="h-[70vh] w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Employee Management System
        </h1>

        <p className="text-lg text-gray-200 max-w-2xl drop-shadow-md mb-8">
          Manage employees seamlessly with an advanced, secure and user-friendly platform.
        </p>

        {/* Buttons */}
        <div className="flex space-x-5">
          <Link
            to="/add-employee"
            className="
              px-7 py-3 rounded-lg font-semibold shadow-lg transition duration-300
              bg-gradient-to-r from-teal-500 to-indigo-600 
              hover:from-teal-600 hover:to-indigo-700 text-white
            "
          >
            ➕ Add Employee
          </Link>

          <Link
            to="/employees"
            className="
              px-7 py-3 rounded-lg font-semibold shadow-lg transition duration-300
              bg-gradient-to-r from-indigo-500 to-teal-500
              hover:from-indigo-600 hover:to-teal-600 text-white
            "
          >
            📋 Employee List
          </Link>
        </div>
      </div>

      {/* ⭐ INFO SECTION */}
      <div className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Why Choose EMS Portal?</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          EMS Portal helps you simplify workforce management with easy tools for tracking,
          updating, and analyzing employee data efficiently.
        </p>
      </div>

      {/* ⭐ CARDS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto pb-20 px-6">

        {/* Card 1 */}
        <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-[#0066FF] mb-3">
            Add Employee
          </h3>
          <p className="text-[#4A4A4A] mb-5">
            Quickly add new employees with structured forms and secure data entry.
          </p>

          <Link
            to="/add-employee"
            className="
              px-5 py-2 text-sm font-semibold rounded-lg transition
              bg-gradient-to-r from-teal-500 to-indigo-600 
              hover:from-teal-600 hover:to-indigo-700 text-white
            "
          >
            ➕ Add Employee
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-[#0066FF] mb-3">
            Employee List
          </h3>
          <p className="text-[#4A4A4A] mb-5">
            Instantly browse, search, and manage all employee records in one place.
          </p>

          <Link
            to="/employees"
            className="
              px-5 py-2 text-sm font-semibold rounded-lg transition
              bg-gradient-to-r from-indigo-500 to-teal-500
              hover:from-indigo-600 hover:to-teal-600 text-white
            "
          >
            📋 View Employees
          </Link>
        </div>

        {/* Card 3 - Dashboard */}
        <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-[#0066FF] mb-3">
            Dashboard
          </h3>
          <p className="text-[#4A4A4A] mb-5">
            Get insights and track employee activity with visual analytics.
          </p>

          <Link
            to="/dashboard"
            className="
              px-5 py-2 text-sm font-semibold rounded-lg transition
              bg-gradient-to-r from-purple-500 to-indigo-600
              hover:from-purple-600 hover:to-indigo-700 text-white
            "
          >
            📊 Go to Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
