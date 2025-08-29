import axios from "axios";

export const getData = async () => {
  const res = await axios.get("http://localhost:3000/places");
  const data = await res.data;
  //   console.log(data.places);
  return data.places;
};
