type Band = {
  id: string;
  name: string;
  image: string;
  genre: string;
  biography: string;
  numPlays: number;
  albums: Array<string>;
};

export interface SortProps {
  bands: Band[];
  setBands: React.Dispatch<React.SetStateAction<Band[]>>;
  results: number;
}
