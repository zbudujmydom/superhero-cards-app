import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.heroImage}
        src={props.image.url}
        alt={props.name}
      />
      <h2>{props.name}</h2>
      <p>{props.powerstats}</p>
    </div>
  );
};

export default Card;
