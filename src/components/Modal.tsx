import { deleteData } from "../api/deleteData";
import type { Place } from "../types/types";

function Modal({
  setFavoritePlace,
  place,
  setIsModalOpen,
}: {
  setFavoritePlace: React.Dispatch<React.SetStateAction<boolean>>;
  place: Place;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const deleteFromFavoritePlace = async (placeId: string) => {
    await deleteData(placeId);
    setFavoritePlace(false);
    location.reload();
  };

  return (
    <article className="w-screen h-screen bg-[#00000087] flex flex-col justify-center items-center absolute top-0 z-50">
      <div className="flex flex-col justify-center items-center gap-5 bg-[#ffffffd2] p-10 rounded-2xl">
        <h1 className="text-black">정말 맛집 목록에서 지우시겠습니까?</h1>
        <div className="flex gap-5">
          <button onClick={() => setIsModalOpen(false)}>유지</button>
          <button
            onClick={() => {
              deleteFromFavoritePlace(place.id);
              setFavoritePlace(false);
              setIsModalOpen(false);
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </article>
  );
}

export default Modal;
