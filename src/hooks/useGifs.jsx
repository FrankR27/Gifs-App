import { useEffect, useState, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);
    const fetchGifs = async () => {
      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "random";
      const data = await getGifs({ keyword: keywordToUse });
      setGifs(data);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    };
    fetchGifs();
  }, [keyword, setGifs]);
  return {
    loading,
    gifs,
  };
}
