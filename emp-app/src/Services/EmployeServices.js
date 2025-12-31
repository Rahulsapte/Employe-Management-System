import axios from "axios";

// ✅ Use only ONE base URL
const REST_API_BASE_URL = "http://localhost:8081/api/employes";

// GET all employees
export const listEmployes = () => axios.get(REST_API_BASE_URL);

// CREATE employee
export const createEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL, employee);
};

export  const getEmployee = (employeeId)=> axios.get(REST_API_BASE_URL +'/'+employeeId);

export const updateEmployee =(employeeId,employee) => axios.put(REST_API_BASE_URL +'/'+employeeId,employee);

export const deleteEmployee =(employeeId) => axios.delete(REST_API_BASE_URL +'/'+ employeeId);
