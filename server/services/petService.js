import axios from "axios";

const API = "http://localhost:5000/api/pets";

export const getAllPets = () => {
  return axios.get(API);
};