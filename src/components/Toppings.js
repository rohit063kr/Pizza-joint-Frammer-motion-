import React from "react";
import { Link } from "react-router-dom";
import Page from "./UI/Page";
import Button from "./UI/Button";
import ListItem from "./UI/ListItem";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <Page className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <ListItem key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </ListItem>
          );
        })}
      </ul>

      <Link to="/order">
        <Button
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Order
        </Button>
      </Link>
    </Page>
  );
};

export default Toppings;
