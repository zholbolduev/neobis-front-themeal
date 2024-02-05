import axios from "axios";
import { searchAPI } from "../../shared/BaseAPI";

export const getMeal = async (inputValue) => {
  try {
    const response = await axios.get(`${searchAPI}${inputValue}`);
    return response.data.meals[0];
  } catch (error) {
    console.error("error", error);
    return null;
  }
};
