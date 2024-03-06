import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
  const {gifs, setGifs} = useContext(GifsContext)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // recuperamos keyword del localstorage
    const keywordToUse = keyword || localStorage.getItem("lastKeyword") || 'random';

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      if (keyword) localStorage.setItem("lastKeyword", keyword);
      setLoading(false);
    });
  }, [keyword, setGifs]);

  return {
    gifs,
    loading
  };
}
