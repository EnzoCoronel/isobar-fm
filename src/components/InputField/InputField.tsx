import React from "react";
import { Props } from "./types";

const InputField: React.FC<Props> = ({ search, setSearch }) => {
  
  return (
    <header className="input">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Music or Band"
        className="input__box"
      />
      <img className="mag" alt="pesquisar" src={require("../../assets/search.png")}/>
      <img className="logo" alt="isobar.fm" src={require("../../assets/logo.png")}/>
    </header>
  );
};

export default InputField;
