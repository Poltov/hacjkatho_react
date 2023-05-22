import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Card";
import { items } from "./components/consts";
import Elems from "./components/Elems";

function addToOrder(item) {
  let isInArray = false;
  this.state.orders.forEach((el) => {
    if (el.id === item.id) isInArray = true;
  });
  if (!isInArray)
    this.setState({ orders: [...this.state.orders, item] }, () => {
      console.log(this.state.orders);
    });
}

const App = () => {
  return (
    <div>
      <Header />
      <Elems items={items} onAdd={addToOrder} />
      <Footer />
    </div>
  );
};

export default App;
