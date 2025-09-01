import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const deleteData = async (id: string) => {
  try {
    const res = await axios.delete(`${BASE_URL}/users/places/${id}`);
    if (res) {
      console.log(res);
    } else {
      throw new Error(`Server Error : fail to delete`);
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};
