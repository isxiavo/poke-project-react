import { Move } from "./moveModel";

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;

  sprites: {
    front_default: string;
    other: {
      dream_world: { front_default: string };
      ["official-artwork"]: { front_default: string };
      home: { front_default: string };
    };
  };

  hp: number;
  atk: number;
  def: number;
  satk: number;
  sdef: number;
  spd: number;

  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];

  types: {
    type: {
      name: string;
      url: string;
    };
  }[];

  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];

  moves: {
    move: Move;
  }[];
};
