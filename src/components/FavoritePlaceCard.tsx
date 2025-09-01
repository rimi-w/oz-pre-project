import { useState } from "react";
import { postData } from "../api/postData";
import type { Place } from "../types/types";
import Modal from "./Modal";

function FavoritePlaceCard({ place }: { place: Place }) {
  const [isFavoritePlace, setFavoritePlace] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const addToFavoritePlace = async (place: Place) => {
    await postData(place);
    setFavoritePlace(true);
    // location.reload();
  };

  return (
    <>
      <div
        onClick={() =>
          isFavoritePlace ? setIsModalOpen(true) : addToFavoritePlace(place)
        }
        className="w-[250px] h-[150px] rounded-2xl overflow-hidden relative"
      >
        <img src={`${BASE_URL}/${place.image.src}`} alt={place.image.alt} />
        <div className="w-[100%] bg-[#00000092] text-center absolute bottom-0 py-1">
          {place.title}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          setFavoritePlace={setFavoritePlace}
          place={place}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}

export default FavoritePlaceCard;
