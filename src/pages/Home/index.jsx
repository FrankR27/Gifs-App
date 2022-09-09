import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import Spinner from "../../compotents/Spinner";
import ListOfGifs from "../../compotents/ListOfGifs";

const POPULAR_GIFS = ["programming", "barcelona", "rick", "morty"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, setLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const { loading, gifs } = useGifs();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search your gif..."
          onChange={handleChange}
        />
      </form>
      <h3>Última búsqueda</h3>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      <h3>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
