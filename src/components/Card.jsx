const Card = ({ children, className }) => {
  return (
    <div className={`bg-rectangle bg-no-repeat bg-contain ${className}`}>{children}</div>
  );
};

export default Card;
