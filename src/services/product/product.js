import axios from "axios";
import { BASE_URL } from "../../constants/server";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
