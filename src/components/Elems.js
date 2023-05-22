import React, { Component } from "react";

import Card from "./Card";

const Elems = ({ items, onAdd }) => {
  return (
    <div>
      {items.map((el) => (
        <Card key={el.id} pitem={el} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default Elems;
