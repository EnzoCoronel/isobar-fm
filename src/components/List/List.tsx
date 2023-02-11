import React from "react";
import { BandsProps } from "./types";
import { Link } from "react-router-dom";

const Bands: React.FC<BandsProps> = ({ bands }) => {

    if(bands.length < 1){
      return(
        <div className="noresults">
          <h3>Sem resultados...</h3>
          <img src={require("../../assets/no_results.png")} alt="Sem resultados" />
        </div>
      )
    }

  return (
    <div className="list">
      {bands.map((band) => (
        <div
          key={band.id}
          className="bands__item"
        >
          <img src={band.image} alt="" />
          <div className="bandText">
          <h3>{band.name}</h3>
          <p>{band.numPlays.toLocaleString()} Plays</p>
          </div>
          <Link className="direct" to={`band/${band.id}`}></Link>
        </div>
      ))}
    </div>
  );
};

export default Bands;
