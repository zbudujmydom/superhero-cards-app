import { useState } from "react";
import styles from "./Search.module.css";
import { searchByName } from "../../services/api";

const Search = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userInput);
    try {
      const data = await searchByName(userInput);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
};

export default Search;
