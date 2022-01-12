export interface IPokemon {
  find(arg0: (pokemon: any) => boolean): IPokemon;
  name: string;
  id: number;
  height: number;
  weight: number;
  moves: IMove[];
  type: IMove[];
  sprites: ISprite;
}

export interface IMove {
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
