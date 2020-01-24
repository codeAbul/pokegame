import { POKECARDS } from "./constants";

export default function computeHands() {
  let randomUniqIndices: number[] = [];

  while (randomUniqIndices.length < 8) {
    let randIdx = Math.floor(Math.random() * 8);

    // Makes sure the indices are unique
    if (
      randomUniqIndices.length == 0 ||
      (randomUniqIndices.length > 0 &&
        !randomUniqIndices.some(idx => idx == randIdx))
    ) {
      randomUniqIndices.push(randIdx);
    }
  }

  // First hand has POKECARDS with first four of random indices
  let firstHand = randomUniqIndices.slice(0, 4).map(idx => POKECARDS[idx]);
  // Second hand has POKECARDS with last four of random indices
  let secondHand = randomUniqIndices.slice(4, 8).map(idx => POKECARDS[idx]);

  return [firstHand, secondHand];
}
