import { useParams } from "react-router-dom";

const HeroDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Details for Hero {id}</h1>
    </div>
  );
};

export default HeroDetails;
