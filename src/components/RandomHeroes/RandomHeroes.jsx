import { useState, useEffect } from "react";
import { fetchRandomHeroes } from "../../services/api";

const RandomHeroes = () => {
  const [randomHeroes, setRandomHeroes] = useState([]);
  const loadHeroes = () => {
    Promise.all([
      fetchRandomHeroes(),
      fetchRandomHeroes(),
      fetchRandomHeroes(),
    ]).then((data) => setRandomHeroes(data));
  };
  console.log(randomHeroes);

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <div>
      <h1>Three Random Superheroes</h1>
      {/* <button onClick={loadHeroes}>Generate</button> */}
      <ul>
        {randomHeroes.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomHeroes;
