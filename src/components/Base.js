import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import ListItem from "./UI/ListItem";
import Page from "./UI/Page";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <Page className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <ListItem key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </ListItem>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <Button
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              Next
            </Button>
          </Link>
        </div>
      )}
    </Page>
  );
};

export default Base;
