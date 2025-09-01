import axios from "axios";
import type { Place } from "../types/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const postData = async (newPlace: Place) => {
  try {
    const res = await axios.post(`${BASE_URL}/users/places`, {
      place: newPlace,
    });
    if (res) {
      console.log(res);
    } else {
      throw new Error(`Server Error : fail to post ${newPlace.title}`);
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};
