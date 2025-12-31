import React, { useState, useEffect } from "react";
import { createEmployee, getEmployee, updateEmployee } from "../Services/EmployeServices";
import { useNavigate, useParams } from "react-router-dom";

const CreateEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [employee, setEmployee] = useState({
        firstname: "",
        lastname: "",
        email: "",
        salary: ""
    });

    const [errors, setErrors] = useState({});

    // Fetch employee data if editing
    useEffect(() => {
        if (id) {
            getEmployee(id)
                .then((response) => {
                    setEmployee({
                        firstname: response.data.firstname,
                        lastname: response.data.lastname,
                        email: response.data.email,
                        salary: response.data.salary
                    });
                })
                .catch((error) => console.error(error));
        }
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    // Form validation
    const validateForm = () => {
        const newErrors = {};

        if (!employee.firstname.trim()) newErrors.firstname = "First name is required";
        else if (!/^[A-Za-z]+$/.test(employee.firstname)) newErrors.firstname = "First name must contain only letters";

        if (!employee.lastname.trim()) newErrors.lastname = "Last name is required";
        else if (!/^[A-Za-z]+$/.test(employee.lastname)) newErrors.lastname = "Last name must contain only letters";

        if (!employee.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)) newErrors.email = "Invalid email format";

        if (!employee.salary.trim()) newErrors.salary = "Salary is required";
        else if (Number(employee.salary) <= 0) newErrors.salary = "Salary must be a positive number";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Save or update employee
    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (id) {
            updateEmployee(id, employee)
                .then(() => navigate("/employees"))
                .catch((error) => console.error(error));
        } else {
            createEmployee(employee)
                .then(() => navigate("/employees"))
                .catch((error) => console.error(error));
        }
    };

    // Cancel button
    const cancel = () => navigate("/employees");

    // Page title
    const pageTitle = id ? "Update Employee 👤" : "Create New Employee 👤";

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fcfdfe] p-8">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8">

                <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">{pageTitle}</h2>

                <form onSubmit={saveOrUpdateEmployee}>

                    {/* FIRST NAME */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            value={employee.firstname}
                            onChange={handleChange}
                            placeholder="Enter first name"
                            className={`w-full px-4 py-2 border rounded-lg ${errors.firstname ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
                    </div>

                    {/* LAST NAME */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                        <input
                            type="text"
                            name="lastname"
                            value={employee.lastname}
                            onChange={handleChange}
                            placeholder="Enter last name"
                            className={`w-full px-4 py-2 border rounded-lg ${errors.lastname ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
                    </div>

                    {/* EMAIL */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* SALARY */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Salary</label>
                        <input
                            type="number"
                            name="salary"
                            value={employee.salary}
                            onChange={handleChange}
                            placeholder="Enter salary"
                            className={`w-full px-4 py-2 border rounded-lg ${errors.salary ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.salary && <p className="text-red-500 text-sm mt-1">{errors.salary}</p>}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="py-2 px-6 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                        >
                            {id ? "Update" : "Save"}
                        </button>
                        <button
                            type="button"
                            onClick={cancel}
                            className="py-2 px-6 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition duration-300"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateEmployee;
