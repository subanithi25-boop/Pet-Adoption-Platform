import axios from "axios";
import { API_URL } from "../config";

const API = `${API_URL}/api/pets`;

export const getAllPets = () => {
  return axios.get(API);
};