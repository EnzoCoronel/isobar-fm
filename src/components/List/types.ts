type Band = {
  id: string;
  name: string;
  image: string;
  genre: string;
  biography: string;
  numPlays: number;
  albums: Array<string>;
};

export interface BandsProps {
  bands: Band[];
}
