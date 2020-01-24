import React from "react";
import { POKECARDS } from "../../utils/constants";
import { IPokeCard } from "../../typings";
import PokeCard from "../PokeCard";

function PokeDex({ pokemon = POKECARDS, experience, isWinner }: IProps) {
  const verdictText = isWinner ? "Winner" : "Loser";
  const verdictClass = `pokedex__verdict--${verdictText.toLowerCase()}`;
  return (
    <article className={"pokedex"}>
      <p className={"pokedex__experience"}>
        Total experience:{" "}
        <span className={"pokedex__experience__total"}>{experience}</span>
      </p>
      <p className={`pokedex__verdict ${verdictClass} `}> {verdictText}</p>
      <article className={"pokedex__cards"}>
        {renderAllPokeCards(pokemon)}
      </article>
    </article>
  );
}

function renderAllPokeCards(pokemon: IPokeCard[]) {
  return pokemon.map(renderPokeCard);

  function renderPokeCard({ id, name, baseExperience, type }: IPokeCard) {
    return (
      <PokeCard
        id={id}
        name={name}
        baseExperience={baseExperience}
        type={type}
      />
    );
  }
}

interface IProps {
  pokemon?: IPokeCard[];
  experience: number;
  isWinner: boolean;
}

export default PokeDex;
