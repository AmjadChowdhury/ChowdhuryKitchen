import PropTypes from "prop-types";
import Button from "./Button";

const FoodCard = ({item}) => {
  const {image,name,recipe} = item
  return (
    <div className="card border-2 border-b-4 border-b-yellow-600">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
      </div>
      <div className="mb-2 flex justify-center">
        <Button name="Add to cart"></Button>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
    item: PropTypes.object
}

export default FoodCard;
