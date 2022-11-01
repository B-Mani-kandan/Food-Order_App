import classes from "./MealIteam.module.css";
import MealIteamForm from "./MealIteamForm";
const MealIteam = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealIteamForm id={props.id} />
      </div>
    </li>
  );
};
export default MealIteam;
