import { useState } from "react";
import { fetchRandomHeroes } from "../../services/api";

const HeroList = () => {
  const [randomHeroes, setRandomHeroes] = useState([]);
  const handleBtnClick = () => {
    Promise.all([
      fetchRandomHeroes(),
      fetchRandomHeroes(),
      fetchRandomHeroes(),
    ]).then((data) => setRandomHeroes(data));
  };
  console.log(randomHeroes);
  return (
    <div>
      <h1>Three Random Superheroes</h1>
      <button onClick={handleBtnClick}>Generate</button>
      <ul>
        {randomHeroes.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
