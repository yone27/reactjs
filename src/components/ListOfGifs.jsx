import React from "react";
import Gif from "./Gif";
import { useGifs } from "../hooks/useGifs";

const ListOfGifs = ({ params }) => {
  const keyword = params?.keyword || null;
  const { gifs, loading } = useGifs({ keyword });

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        gifs.length &&
        gifs.map(({ title, id, url }) => (
          <Gif key={id} title={title} url={url} id={id} />
        ))
      )}
    </>
  );
};

export default ListOfGifs;
