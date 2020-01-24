import React from "react";
import PokeDex from "../PokeDex";
import computeHands from "../../utils/computeHands";
import computeExperience from "../../utils/computeExperience";

function PokeGame() {
  const [firstHand, secondHand] = computeHands();
  const firstHandExp = computeExperience(firstHand);
  const secondHandExp = computeExperience(secondHand);
  var isFirstHandWinner = false;

  if(firstHandExp >= secondHandExp){
       isFirstHandWinner= true;
  }

  return (
    <article className={"pokegame"}>
      <PokeDex pokemon={firstHand} title={"Hand 1"} experience={firstHandExp}  isWinner={isFirstHandWinner}/>
      <PokeDex pokemon={secondHand} title={"Hand 2"} experience={secondHandExp} isWinner={!isFirstHandWinner} />
    </article>
  );
}

export default PokeGame;
