import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Dog",
      breed: "French Bulldog",
    }),
    React.createElement(Pet, {
      name: "Billy",
      animal: "Cat",
      breed: "Tabby",
    }),
    React.createElement(Pet, {
      name: "Bailey",
      animal: "Cat",
      breed: "Tabby",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
