import React from "react";
import _ from "lodash";
export default function JoinDemo() {
  let arr = ["Dat", "Diep", "Dat And Diep"];
  let arrPerson = [
    { id: 1, name: "Dat" },
    { id: 2, name: "Diep" },
    { id: 1, name: "Dat And Diep" },
  ];
  // ES6
  const result = arr.join("-"); // IE 9 10 dont't know

  // LODASH 
  const resultLodash = _.join(arr, "*"); // support full version

  const person = _.find(arrPerson, (item) => item.id === 2);
  return (
    <div>
      <h1 className="text-blue-600 text-xl">ES6</h1>
      {result}
      <br />
      <br />
      <h1 className="text-green-600 text-xl">LODASH</h1>
      {resultLodash}
      <div>id: {person.id}, name: {person.name}</div>
    </div>
  );
}
