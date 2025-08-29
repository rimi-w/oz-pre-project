import axios from "axios";

export const getPlaceData = async () => {
  const res = await axios.get("http://localhost:3000/places");
  const data = await res.data;
  //   console.log(data.places);
  return data.places;
};

export const getUserPlaceData = async () => {
  const res = await axios.get("http://localhost:3000//users/places");
  const data = await res.data;
  //   console.log(data.places);
  return data.places;
};
