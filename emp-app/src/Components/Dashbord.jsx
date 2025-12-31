import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, UserPlus, ClipboardList, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-[#ebe4e4] text-white">

      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="w-64 bg-[#f1e9e9] p-6 shadow-lg border-r border-[#4A4A4A]">
        <h2 className="text-2xl font-bold mb-8 text-[#6682a9]">EMS Dashboard</h2>

        <nav className="space-y-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 rounded-lg flex items-center gap-2 transition font-semibold"
          >
            <BarChart3 size={18} /> Dashboard
          </button>

          <button
            onClick={() => navigate("/employees")}
            className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 rounded-lg flex items-center gap-2 transition font-semibold"
          >
            <Users size={18} /> Employees
          </button>

          <button
            onClick={() => navigate("/add-employee")}
            className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 rounded-lg flex items-center gap-2 transition font-semibold"
          >
            <UserPlus size={18} /> Add Employee
          </button>
        </nav>
      </aside>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-[#637fa9] mb-6">
          Employee Management Dashboard
        </h1>

        {/* ----------- STAT CARDS ----------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white text-[#1E1E1E] p-6 rounded-xl shadow-md border-l-4 border-[#0066FF]">
            <h3 className="text-gray-600">Total Employees</h3>
            <p className="text-3xl font-bold">24</p>
          </div>

          <div className="bg-white text-[#1E1E1E] p-6 rounded-xl shadow-md border-l-4 border-[#4A90E2]">
            <h3 className="text-gray-600">Active Employees</h3>
            <p className="text-3xl font-bold">12</p>
          </div>

          <div className="bg-white text-[#1E1E1E] p-6 rounded-xl shadow-md border-l-4 border-[#00D986]">
            <h3 className="text-gray-600">New This Month</h3>
            <p className="text-3xl font-bold">7</p>
          </div>

          <div className="bg-white text-[#1E1E1E] p-6 rounded-xl shadow-md border-l-4 border-[#FF4757]">
            <h3 className="text-gray-600">On Leave</h3>
            <p className="text-3xl font-bold">5</p>
          </div>

        </div>

        {/* ----------- TABLE PREVIEW ----------- */}
        <div className="mt-10 bg-[#F8F9FA] text-[#1E1E1E] shadow-lg p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-[#0066FF]">Recent Employees</h2>

            <button
              onClick={() => navigate("/employees")}
              className="py-2 px-5 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold rounded-lg transition"
            >
              View All
            </button>
          </div>

          <table className="w-full table-auto">
            <thead>
              <tr className="text-left bg-gray-200 text-[#1E1E1E]">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Salary</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">Rahul Patil</td>
                <td className="p-3">rahul@example.com</td>
                <td className="p-3">₹40,000</td>
                <td className="p-3">
                  <button className="text-[#0066FF] hover:underline">View</button>
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Anjali Deshmukh</td>
                <td className="p-3">anjali@example.com</td>
                <td className="p-3">₹55,000</td>
                <td className="p-3">
                  <button className="text-[#0066FF] hover:underline">View</button>
                </td>
              </tr>

              <tr>
                <td className="p-3">Sagar More</td>
                <td className="p-3">sagar@example.com</td>
                <td className="p-3">₹30,000</td>
                <td className="p-3">
                  <button className="text-[#0066FF] hover:underline">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
