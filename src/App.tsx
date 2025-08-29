import PlaceList from "./components/PlaceList";
import FavoritePlaceList from "./components/FavoritePlaceList";
import logo from "../src/assets/logo.png";

function App() {
  return (
    <>
      <div className="flex gap-5 justify-center m-10">
        <img src={logo} className="w-[50px] invert rounded-full" />
        <h1 className="text-4xl font-extrabold">Today's Restaurant</h1>
      </div>
      <FavoritePlaceList />
      <PlaceList />
    </>
  );
}

export default App;
