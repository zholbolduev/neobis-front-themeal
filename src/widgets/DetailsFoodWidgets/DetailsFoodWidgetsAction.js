import axios from "axios";
import { idAPI } from "../../shared/BaseAPI";

export const getOneMeal = async (id) => {
  try {
    const response = await axios.get(`${idAPI}${id}`);
    return response.data.meals[0];
  } catch (error) {
    console.error("error", error);
    return null;
  }
};
