import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";
let items = ["primul element", "al doilea element", "al treilea element"];


function Mesaj() {
  let eventHandler = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>Bine ai venit in React</h1>
      {items.length === 0 && <p>Nu sunt elemente</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={() => {eventHandler}}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Mesaj;
