const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 Hello React"),
    React.createElement("h2", {}, "H2 bye bye"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H001 Hello React"),
    React.createElement("h2", {}, "H002 bye bye"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent); //object
root.render(parent);
