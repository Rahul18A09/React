import { fetchPhotos } from "./api/mediaApi";


const App = () => {
  
  return (
    <div className="h-screen text-white w-full bg-gray-950">
      <button onClick={ fetchPhotos()}>Get Photos</button>
    </div>
  );
};

export default App;
