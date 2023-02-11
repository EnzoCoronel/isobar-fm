import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";

type Band = {
  id: string;
  name: string;
  image: string;
  genre: string;
  biography: string;
  numPlays: number;
  albums: Array<string>;
};

type Track = {
  id: string;
  name: string;
  duration: number;
};

type Album = {
  id: string;
  band: string;
  name: string;
  image: string;
  releaseDate: string;
  tracks: Array<Track>;
};

const Info: React.FC = () => {
  const { id } = useParams();

  const [band, setBand] = useState<Band>({
    id: "1",
    name: "undefined",
    image: "../assets/no_results.png",
    genre: "undefined",
    biography: "bio",
    numPlays: 69,
    albums: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const resultBand = await fetch(
        `https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands/${id}`
      );
      const jsonBand = await resultBand.json();
      setBand(jsonBand);

      const result = await fetch(
        "https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/albums/"
      );
      const jsonResult = await result.json();
      setAlbuns(jsonResult);
    };
    fetchData();
  }, []);

  const [albuns, setAlbuns] = useState<Array<Album>>([]);

  const thisAlbuns: Array<Album> = [];
  band.albums.forEach((id) => {
    const found = albuns.find((album) => album.id === id);
    if (found) thisAlbuns.push(found);
  });

  const open = () => {
    document.getElementById("text")?.classList.toggle("open");
    document.getElementById("text")?.classList.toggle("effect");

  };

  return (
    <div className="container artist">
      <div className="header">
        <Link className="return" to="/">
          <svg width="32" height="32" fill="white" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </Link>
        <img src={require("../assets/logo.png")} alt="" />
      </div>
      <div className="behind">
        <img src={band.image} alt="" />
      </div>
      <div className="info">
        <h1>{band.name}</h1>
        <div className="bandRow">
          <p>{band.genre}</p>
          <img className="disc" src={band.image} alt="" />
          <p>{band.numPlays.toLocaleString()}</p>
        </div>
        <div className="containerBio effect" id="text">
          <p
            className="bio"
            dangerouslySetInnerHTML={{ __html: band.biography }}
          ></p>
        </div>
        <button className="more" onClick={open}>
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
        <h2>ALBUNS</h2>
        <div className="albums">
          {thisAlbuns.map((album) => {
            return (
              <div className="album">
                <img key={album.id} src={album.image} alt={album.name} />
                <p>{album.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Info;
