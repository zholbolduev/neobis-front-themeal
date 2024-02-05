import axios from "axios";
import { randomAPI } from "../../shared/BaseAPI";

export const getRandomMeal = async () => {
  try {
    const response = await axios.get(randomAPI);
    return response.data.meals[0];
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};
