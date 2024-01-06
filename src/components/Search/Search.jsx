import { useState } from "react";
import styles from "./Search.module.css";
import { searchByName } from "../../services/api";
import Card from "../Card/Card";

const newHeroesArr = [];
let isDuplicate = false;

const Search = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await searchByName(userInput);
      const usersHero = data.results[0];

      if (usersHero) {
        isDuplicate =
          newHeroesArr.find((hero) => hero.id === usersHero.id) !== undefined;

        if (!isDuplicate) {
          newHeroesArr.push(usersHero);
          console.log(newHeroesArr);
        }
      }
    } catch (error) {
      console.error(error);
    }
    setUserInput("");
  };

  return (
    <div>
      <form className={styles.searchForm} onSubmit={handleFormSubmit}>
        <input
          className={styles.input}
          placeholder="character's name"
          type="text"
          value={userInput}
          onChange={handleInputChange}
        ></input>
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
      {isDuplicate && (
        <p className={styles.duplicateError}>You already have this card.</p>
      )}
      <div className={styles.cardWrapper}>
        <div className={styles.newCardContainer}>
          {newHeroesArr.map((hero) => (
            <Card
              key={hero.id}
              name={hero.name}
              powerstats={hero.powerstats}
              image={hero.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
