import {NAMES} from "../constants/names.ts";


const getRandomNamesIndex = (): number => Math.floor(Math.random() * NAMES.length);

export const generateRandomName = (): string => {
  return NAMES[getRandomNamesIndex()];
};
