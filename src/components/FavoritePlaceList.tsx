import { useEffect, useState } from "react";
import type { Place } from "../types/types";
import PlaceCard from "./PlaceCard";
import { getUserPlaceData } from "../api/getData";
import Loading from "./Loading";
import { sortPlacesByDistance } from "../functions/loc";

function FavoritePlaceList() {
  const [userPlaceList, setUserPlaceList] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getPlaces = async () => {
      try {
        const placeData = await getUserPlaceData();

        if (placeData) {
          window.navigator.geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;

            const sortPlaceList = sortPlacesByDistance(
              placeData,
              crd.latitude,
              crd.longitude
            );

            setUserPlaceList(sortPlaceList);
          });
        } else throw new Error(`fail to get place list`);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    getPlaces();
  }, []);

  console.log(userPlaceList);

  return (
    <article className="flex flex-col items-center p-5 m-5 border rounded-4xl">
      <h2 className="text-2xl font-extrabold p-5">내 맛집 목록</h2>
      {isLoading && <Loading />}
      <div className="flex justify-center flex-wrap gap-2.5">
        {userPlaceList.map((place: Place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </article>
  );
}

export default FavoritePlaceList;
