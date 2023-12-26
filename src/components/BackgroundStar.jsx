import { GiStarShuriken } from "react-icons/gi";

const BackgroundStar = ({ className }) => {
  return (
    <GiStarShuriken className={`fill-lightBlue absolute z-10 ${className}`} />
  );
};

export default BackgroundStar;
