import axios from "axios";

// paste backend url
// "http://localhost:8000" ||
const URL =  "https://mern-stack-crud-app-backend.onrender.com";

export const addUserService = async (data) => {
  try {
    return await axios.post(`${URL}/adduser`, data);
  } catch (error) {
    console.log("Error while calling addUser API", error);
  }
};

export const getUserDataService = async (data) => {
  try {
    return await axios.get(`${URL}/getuser`, data);
  } catch (error) {
    console.log("Error while calling getUser API", error);
  }
};

export const loadUserDataService = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling editUser API", error);
  }
};

export const editUserService = async (user, id) => {
  try {
    return await axios.post(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error while calling editUserService API", error);
  }
};

export const deleteUserService = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling deleteUserService API", error);
  }
};
