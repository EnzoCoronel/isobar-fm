import React from "react";
import "../../App.css";
import { SortProps } from "./types";

const InputField: React.FC<SortProps> = ({ bands, setBands, results }) => {
  const drop = () => {
    document.getElementById("dropdown")?.classList.toggle("show");
  };

  const sortType = {
    ALPHABETICALLY: "alphabetically",
    POPULARITY: "popularity",
  };

  const sort = (type: string) => {
    let previousBands = [...bands];
    if (type === sortType.ALPHABETICALLY) {
      bands.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      });
    } else if (type === sortType.POPULARITY) {
      bands.sort((a, b) => {
        return a.numPlays - b.numPlays;
      });
    }
    console.log(previousBands[0].name, bands[0].name);
    if (previousBands[0] == bands[0]) bands.reverse();
    setBands((prevBands) => (prevBands = [...bands]));
  };

  return (
    <div className="sortRow">
      <div className={`sorted ${results === 32 ? "nofilter" : ""}`}>
        <p>{results} resultados</p>
      </div>
      <div className="dropdown">
        <img
          id="sortBy"
          src={require("../../assets/order_by.png")}
          onClick={drop}
          alt=""
        />
        <div className="dropdown_contend" id="dropdown">
          <button id="alphabet" onClick={() => sort(sortType.ALPHABETICALLY)}>
            Ordem alfabética
          </button>
          <button id="popular" onClick={() => sort(sortType.POPULARITY)}>
            Popularidade
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
