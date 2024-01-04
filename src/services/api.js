import { getRandomId } from "../utils/getRandomId";
const url = `https://superheroapi.com/api/${process.env.REACT_APP_ACCESS_TOKEN}`;

export const fetchRandomHeroes = async () => {
  try {
    const randomId = getRandomId();
    const response = await fetch(`${url}/${randomId}`);
    const data = await response.json();
    // const newHero = {
    //   id: data.id,
    //   name: data.name,
    //   stats: data.powerstats,
    //   image: data.image,
    // };
    // console.log(newHero);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 2 str
