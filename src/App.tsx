import { useEffect, useState } from "react";
import { getData } from "./api/getData";
import type { Place } from "./types/types";
import PlaceList from "./components/PlaceList";

function App() {
  const [allPlaceList, setAllPlaceList] = useState<Place[]>([]);

  useEffect(() => {
    const getPlaces = async () => {
      setAllPlaceList(await getData());
    };
    getPlaces();
  }, []);

  console.log(allPlaceList);

  return (
    <>
      <PlaceList allPlaceList={allPlaceList} />
    </>
  );
}

export default App;
