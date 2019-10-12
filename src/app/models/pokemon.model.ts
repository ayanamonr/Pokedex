export class Pokemon {
  id: number;
  name: string;
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    }
  }[];
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    back_default: string;
    front_default: string;
  };
}
