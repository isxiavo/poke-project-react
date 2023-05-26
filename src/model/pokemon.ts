export type Pokemon = {
  id: number;
  name: string;
  height: number,
  weight: number 

  sprites: {
    front_default: string;
    dream_world: string;
    official_artwork: string;
    home: string;
  };

  hp: number,
  atk: number,
  def: number,
  satk: number,
  sdef: number,
  spd: number,

  types: { type: {
    name: string;
    url: string;
  }}[];

  moves:{ move: {
    name: string;
    url: string;
  }}[]

  
}