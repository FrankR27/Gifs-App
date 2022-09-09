import Spinner from "./Spinner";
import { Link } from "wouter";
import { useGifs } from "../hooks/useGifs";
import ListOfGifs from "./ListOfGifs";

function SearchGifs({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <>
      <Link className="home" to="/">
        App de Gifs
      </Link>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
    </>
  );
}

export default SearchGifs;
