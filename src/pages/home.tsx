import React, { useEffect, useState } from "react";
import "../App.css";
import InputField from "../components/InputField/InputField";
import Sorting from "../components/Sorting/Sorting";
import List from "../components/List/List";

type Band = {
  id: string;
  name: string;
  image: string;
  genre: string;
  biography: string;
  numPlays: number;
  albums: Array<string>;
};

const Home: React.FC = () => {
  const [bands, setBands] = useState<Array<Band>>([]);
  const [search, setsearch] = useState<string>("");

  const fetchData = async () => {
    const result = await fetch(
      "https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands/"
    );
    const jsonResult = await result.json();
    setBands(jsonResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filter = bands.filter((band) =>
    band.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <InputField search={search} setSearch={setsearch} />
      <Sorting bands={bands} setBands={setBands} results={filter.length} />
      <List bands={filter} />
    </div>
  );
};
export default Home;
