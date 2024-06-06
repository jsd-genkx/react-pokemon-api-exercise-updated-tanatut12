// import PokemonBasicFetch from "./components/PokemonBasicFetch";
// import PokemonBasicFetchAxios from "./components/PokemonBasicFetchAxios";
import PokemonFetch from "./components/PokemonFetch";
// import PokemonFetchAxios from "./components/PokemonFetchAxios";
// import PokemonSearchFetch from "./components/PokemonSearchFetch";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Fetch API */}
      {/* <PokemonBasicFetch /> */}
      <PokemonFetch />
      {/* Axios */}
      {/* <PokemonBasicFetchAxios /> */}
      {/* <PokemonFetchAxios /> */}
      {/* Bonus Code Example */}
      {/* <PokemonSearchFetch /> */}
      {/* Bonus Code Challenge: refactor PokemonSearchFetch to use Axios */}
    </div>
  );
};

export default App;
