import React, { useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "../components/ListOfGifs";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [, navigation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='search a gif here...'
          type='text'
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <h3>Ultima busqueda</h3>
      <ListOfGifs />
    </>
  );
};

export default Home;
