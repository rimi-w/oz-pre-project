import type { Place } from "../types/types";
import PlaceCard from "./PlaceCard";

function PlaceList({ allPlaceList }: { allPlaceList: Place[] }) {
  return (
    <article className="flex flex-col items-center p-5 m-5 border rounded-4xl">
      <h1 className="text-2xl font-extrabold p-5">맛집 목록</h1>
      <div className="flex justify-center flex-wrap gap-2.5">
        {allPlaceList.map((place: Place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </article>
  );
}

export default PlaceList;
