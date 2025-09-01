import type { Place } from "../types/types";
import { place } from "./getData";

export const postData = async (newPlace: Place) => {
  try {
    const res = await place.post(`/users/places`, {
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
