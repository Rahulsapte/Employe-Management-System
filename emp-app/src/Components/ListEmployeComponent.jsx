import React ,{useState,useEffect} from "react";
import { deleteEmployee, listEmployes } from "../Services/EmployeServices";
import { useNavigate } from "react-router-dom";

const ListEmployeComponent = () => {
    const [employes,setEmployes]=useState([]);
    const usenavigate = useNavigate();

    useEffect(()=>{
       getAllEmployee();
    },[])

    const getAllEmployee =()=>{
         listEmployes().then((response)=>{
            setEmployes(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }

    const AddNewEmployee =()=>{
        usenavigate("/add-employee")
    }
    const updateEmploye =(id)=>{
        usenavigate(`/edit-employee/${id}`)

    }
    const removeEmploye=(id)=>{
        deleteEmployee(id).then((response)=>{
            getAllEmployee();
        }).catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="p-8 min-h-screen bg-[#f1e9e9] font-sans relative mb-6"> 
            <h2 className="text-4xl font-extrabold text-terracotta-700 text-center mb-10 tracking-wide drop-shadow-sm">
                Employee Records 🏷️
            </h2>

            {/* Table Container with Floating Action Button */}
            <div className="relative">

                {/* 🌟 Beautiful Button on Left Corner */}
    <button
        className="
            py-3 px-5 
            bg-gradient-to-r from-teal-500 to-indigo-600 
            text-white font-semibold 
            rounded-full 
            shadow-lg 
            hover:shadow-xl 
            hover:from-teal-600 hover:to-indigo-700
            transition-all duration-300 
            flex items-center gap-2
            mb-4
        "
        onClick={AddNewEmployee}
    >
        ➕ Add Employee
    </button>

                <table className="min-w-full divide-y divide-teal-300 shadow-lg rounded-lg mt-6">
                    <thead>
                        <tr className="bg-teal-700"> 
                            <th className="px-4 py-3 text-left text-sm font-extrabold text-white uppercase tracking-wider">ID</th>
                            <th className="px-4 py-3 text-left text-sm font-extrabold text-white uppercase tracking-wider">First Name</th>
                            <th className="px-4 py-3 text-left text-sm font-extrabold text-white uppercase tracking-wider">Last Name</th>
                            <th className="px-4 py-3 text-left text-sm font-extrabold text-white uppercase tracking-wider">Email</th>
                            <th className="px-4 py-3 text-left text-sm font-extrabold text-white uppercase tracking-wider">Salary</th>
                            <th className="px-4 py-3 text-left text-sm font-extrabold text-white uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {employes.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="px-4 py-4 text-center text-gray-500 italic bg-white">
                                    No records found.
                                </td>
                            </tr>
                        ) : (
                            employes.map((emp, index) => (
                                <tr
                                    key={emp.id}
                                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-mint-cream-light'} 
                                                hover:bg-teal-100 transition duration-200 ease-in-out`} 
                                >
                                    <td className="px-4 py-3 text-sm font-black text-terracotta-700">{emp.id}</td>
                                    <td className="px-4 py-3 text-base font-semibold text-gray-800">{emp.firstname}</td>
                                    <td className="px-4 py-3 text-base font-medium text-gray-600">{emp.lastname}</td>
                                    <td className="px-4 py-3 text-base text-teal-600 hover:text-teal-800">{emp.email}</td>
                                    <td className="px-4 py-3 text-base text-teal-600 hover:text-teal-800">{emp.salary}</td>
                                    <td>
                                        <button className="  ml-4 px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-teal-500 text-white text-sm font-medium
                                             rounded-md shadow hover:from-indigo-600 hover:to-teal-600 transition duration-300 "
                                             onClick={() => updateEmploye(emp.id)}>
                                             Update
                                        </button>
                                        <button className="  ml-4 px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-teal-500 text-white text-sm font-medium
                                             rounded-md shadow hover:from-indigo-600 hover:to-teal-600 transition duration-300 "
                                              onClick={() => removeEmploye(emp.id)}>
                                             Delete
                                        </button>

                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ListEmployeComponent;
