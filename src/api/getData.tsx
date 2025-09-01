import axios from "axios";

export const place = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || ``,
});

export const getPlaceData = async () => {
  try {
    const res = await place.get(`/places`);
    if (res) {
      const data = await res.data;

      return data.places;
    } else {
      throw new Error(`Server Error : fail to get Places Data`);
    }
  } catch (e) {
    console.error(e);
    return null;
  }
  //   console.log(data.places);
};

export const getUserPlaceData = async () => {
  try {
    const res = await place.get(`/users/places`);
    if (res) {
      const data = await res.data;

      return data.places;
    } else {
      throw new Error(`Server Error : fail to get User Places Data`);
    }
  } catch (e) {
    console.error(e);
    return null;
  }
  //   console.log(data.places);
};
