export interface IPokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  moves: IMovTyp[];
  type: IMovTyp[];
  sprites: ISprite;
}

export interface IMovTyp {
  typmove: {
    name: string;
    url: string;
  };
}

export interface ISprite {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}
