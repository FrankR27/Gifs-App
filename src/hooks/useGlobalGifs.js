import GifsContext from "../context/GifsContext";
import { useContext } from "react";

export default function useGlobalGifs() {
  const { gifs } = useContext(GifsContext);
  return gifs;
}
