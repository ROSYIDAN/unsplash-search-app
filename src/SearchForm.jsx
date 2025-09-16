import React, { useState } from "react";
import { useGlobalContext } from "./GlobalContext";

export const SearchForm = () => {
  const { setSearchVal } = useGlobalContext();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchVal(input);
    console.log(input);
  };
  return (
    <>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
