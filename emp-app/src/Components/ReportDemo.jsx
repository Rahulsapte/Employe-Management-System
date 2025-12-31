import React from "react";

const ReportDemo = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-10 drop-shadow">
        📊 Reports – Demo Page
      </h1>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white p-7 rounded-2xl shadow-xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">
            Total Employees
          </h3>
          <p className="text-gray-600">A quick count of all employees in the system.</p>

          <div className="mt-4 text-4xl font-bold text-blue-600">25</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-7 rounded-2xl shadow-xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            Active Employees
          </h3>
          <p className="text-gray-600">Employees currently working in the organization.</p>

          <div className="mt-4 text-4xl font-bold text-green-600">22</div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-7 rounded-2xl shadow-xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold text-red-700 mb-2">
            On Leave
          </h3>
          <p className="text-gray-600">Employees who are currently on leave.</p>

          <div className="mt-4 text-4xl font-bold text-red-600">3</div>
        </div>
      </div>

      {/* Bottom Box */}
      <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">About This Report</h2>
        <p className="text-gray-700 leading-relaxed">
          This is a static demo report page created for the Employee Management System.   
          Here you can show numbers, summaries, or important highlights related to employees.  
          In the future, this page can be upgraded to show charts, graphs, and real-time analytics.
        </p>
      </div>

    </div>
  );
};

export default ReportDemo;
