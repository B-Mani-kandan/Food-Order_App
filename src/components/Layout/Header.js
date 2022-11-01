import React from "react";
import { Fragment } from "react";
import mealsImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.Header}>
        <h1>ReactMeals</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.image}>
        <img src={mealsImage} alt="hi" />
      </div>
    </Fragment>
  );
};

export default Header;
