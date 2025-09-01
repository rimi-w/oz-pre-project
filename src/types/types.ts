export type Place = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
  description: string;
};

export interface DeleteConfirmModal {
  setFavoritePlace: React.Dispatch<React.SetStateAction<boolean>>;
  place: Place;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
