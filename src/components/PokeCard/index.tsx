import React from "react";
import { POKEIMGAPI } from "../../utils/constants";
import { IPokeCard } from "../../typings";

function PokeCard({ id, name, type, baseExperience }: IProps) {
  const paddedId = String(id).padStart(3, "0");
  console.log(paddedId);
  return (
    <article className={"pokecard"}>
      <h2 className={"pokecard__name"}>{name}</h2>
      <img src={`${POKEIMGAPI}/${paddedId}.png`} alt={""} className={"pokecard__img"} />
      <p>
        Type: {type} <br /> Exp: {baseExperience}
      </p>
    </article>
  );
}

interface IProps extends IPokeCard {}

export default PokeCard;
