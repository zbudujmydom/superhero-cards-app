// import { useState } from "react";

const HeroList = () => {
  //   const [randomHeroes, setRandomHeroes] = useState([]);

  const handleBtnClick = async () => {
    const url = "https://superheroapi.com/api/4315987961960314";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      //   const selectedHeroes = [];
      //   for (let i = 0; i < 3; i++) {
      //     const randomIndex = Math.floor(Math.random() * data.results.length);
      //     selectedHeroes.push(data.results[randomIndex]);
      //   }
      //   setRandomHeroes(selectedHeroes);
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  return (
    <div>
      <h1>Three Random Superheroes</h1>
      <button onClick={handleBtnClick}>Generate</button>
      <ul>
        {/* {randomHeroes.map((hero, index) => (
          <li key={index}>{hero.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default HeroList;
