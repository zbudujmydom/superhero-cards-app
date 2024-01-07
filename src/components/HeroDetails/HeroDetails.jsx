import { useParams } from "react-router-dom";

const HeroDetails = () => {
  const { heroId } = useParams();
  console.log(heroId);
  return (
    <div>
      <h1>Details for Hero {heroId}</h1>
    </div>
  );
};

export default HeroDetails;
