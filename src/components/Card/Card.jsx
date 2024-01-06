import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.heroImage}
        src={props.image.url}
        alt={props.name}
      />
      <h2 className={styles.heroName}>{props.name}</h2>
      <div className={styles.heroStats}>
        <p className={styles.statsNames}>
          Power:{" "}
          <span className={styles.statsNumbers}>{props.powerstats.power}</span>
        </p>
        <p className={styles.statsNames}>
          Speed:{" "}
          <span className={styles.statsNumbers}>{props.powerstats.speed}</span>
        </p>
        <p className={styles.statsNames}>
          Strength:{" "}
          <span className={styles.statsNumbers}>
            {props.powerstats.strength}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
