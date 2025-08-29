import type { Place } from "../types/types";

function PlaceCard({ place }: { place: Place }) {
  const baseUrl = "http://localhost:3000/";

  return (
    <>
      <div className="w-[250px] h-[150px] rounded-2xl overflow-hidden relative">
        <img src={baseUrl + place.image.src} alt={place.image.alt} />
        <div className="w-[100%] bg-[#00000092] text-center absolute bottom-0 py-1">
          {place.title}
        </div>
      </div>
    </>
  );
}

export default PlaceCard;
