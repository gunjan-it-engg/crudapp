// import axios from "axios";

// const url = "http://localhost:3003/users";

// export const getUsers = async (id) => {
//   id = id || "";
//   return await axios.get(`${url}/${id}`); // if exists http://localhost:3003/users/2 if no this will go empty
// };

// export const addUser = async (user) => {
//   return await axios.post(url, user);
// };

// export const editUser = async (id, user) => {
//   return await axios.put(`${url}/${id}`, user);
// };

// export const deleteUser = async (id) => {
//   return await axios.delete(`${url}/${id}`);
// };

import axios from "axios";

// const usersUrl = 'http://localhost:3003/users';
// const usersUrl = "http://localhost:8080/users";
const usersUrl = "http://localhost:3000/employe";
const authUrl = "http://localhost:3000/users";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${usersUrl}/${id}`);
};

export const addUser = async (values) => {
  return await axios.post(`${usersUrl}/add`, values);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};

export const addReg = async (values) => {
  return await axios.post(`${authUrl}`, values);
};

export const loginUser = async (values) => {
  return await axios.post(`${authUrl}/login`, values);
};
