import { getRandomId } from "./getRandomId";
const url = "https://superheroapi.com/api.php/4315987961960314";

export const fetchRandomHeroes = async () => {
  try {
    const randomId = getRandomId();
    const response = await fetch(`${url}/${randomId}`);
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
