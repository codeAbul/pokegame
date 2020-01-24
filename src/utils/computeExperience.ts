import { IPokeCard } from "../typings";

export default function computeExperience(pokemon: IPokeCard[]) {
  return pokemon.reduce(addUpExperience, 0);

  function addUpExperience(totalExp: number, { baseExperience }: IPokeCard) {
    return totalExp + baseExperience;
  }
}
