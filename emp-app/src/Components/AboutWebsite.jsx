import React from "react";

const AboutWebsite = () => {
  return (
    <div className="min-h-screen bg-[#f1e9e9] py-16 px-6">

      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-center text-[#1A73E8] mb-12">
        About This Website
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* Introduction Card */}
        <div className="bg-[#F3F7FF] p-8 rounded-2xl shadow-md border border-blue-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Employee Management System helps organizations manage employee data
            in a simple, modern, and efficient way.
          </p>
        </div>

        {/* Features */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#1A73E8] mb-4">
            Main Features
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 text-lg">
            <li>Add new employees with details</li>
            <li>Edit or remove employee information</li>
            <li>View clean and responsive employee list</li>
            <li>Basic reporting features</li>
          </ul>
        </div>

        {/* Purpose */}
        <div className="bg-[#F3F7FF] p-8 rounded-2xl shadow-md border border-blue-100">
          <h3 className="text-2xl font-semibold text-[#1A73E8] mb-4">
            Purpose of the System
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            EMS centralizes employee information, reduces paperwork, improves workflow,
            and helps HR or managers access data easily, securely, and quickly.
          </p>
        </div>

        {/* Tech Stack Box */}
        <div className="bg-[#1A73E8] text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Technology Used</h3>
          <p className="text-lg">
            React (Frontend) • Spring Boot (Backend) • MySQL (Database)
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutWebsite;
