import { place } from "./getData";

export const deleteData = async (id: string) => {
  try {
    const res = await place.delete(`/users/places/${id}`);
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
