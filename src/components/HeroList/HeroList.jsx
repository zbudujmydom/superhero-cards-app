import { fetchRandomHeroes } from "../../utils/api";

const HeroList = () => {
  return (
    <div>
      <h1>Three Random Superheroes</h1>
      <button onClick={fetchRandomHeroes}>Generate</button>
      <ul>
        {/* {randomHeroes.map((hero, index) => (
          <li key={index}>{hero.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default HeroList;
