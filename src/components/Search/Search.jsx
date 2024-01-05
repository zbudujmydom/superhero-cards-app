import { useState } from "react";
import styles from "./Search.module.css";
import { searchByName } from "../../services/api";
import Card from "../Card/Card";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [selectedHero, setSelectedHero] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userInput);
    try {
      const data = await searchByName(userInput);
      console.log(data.results[0]);
      const usersHero = data.results[0];
      setSelectedHero(usersHero);
    } catch (error) {
      console.error(error);
    }
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
      {selectedHero && (
        <div className={styles.newCardContainer}>
          <Card
            key={selectedHero.id}
            name={selectedHero.name}
            powerstats={selectedHero.powerstats}
            image={selectedHero.image}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
