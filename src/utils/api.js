import { getRandomId } from "./getRandomId";
const url = "https://superheroapi.com/api.php/4315987961960314";

export const fetchRandomHeroes = async () => {
  try {
    const randomId = getRandomId();
    const response = await fetch(`${url}/${randomId}`);
    const data = await response.json();
    const newHero = {
      id: data.id,
      name: data.name,
      stats: data.powerstats,
      image: data.image,
    };
    console.log(newHero);
  } catch (error) {
    console.error(error);
  }
};
