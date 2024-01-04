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
      {props.powerstats ? (
        <>
          <p>Power:{props.powerstats.power}</p>
          <p>Speed:{props.powerstats.speed}</p>
          <p>Strength:{props.powerstats.strength}</p>
        </>
      ) : (
        <p>No power stats available</p>
      )}
    </div>
  );
};

export default Card;
