import React from "react";
import _ from "lodash";
export default function LastFirstLodash() {
  const arrStudent = [
    { id: 1, name: "Dat" },
    { id: 2, name: "Diep" },
    { id: 1, name: "Dat and Diep" },
  ];
  const fistName = _.first(arrStudent);
  const lastName = _.last(arrStudent);

  const arr = [
    ["01", "Master"],
    ["02", "Admin"],
    ["03", "Master and Admin"],
  ];

  const [id, name] = _.first(arr);
  const [id1, name1] = _.last(arr);

  return (
    <div className="container">
      <div>FirstItem: {fistName.name}</div>
      <div>LastItem: {lastName.name}</div>
      <hr />
      <div>
        FirstItem: {id} - {name}
      </div>
      <div>
        LastItem: {id1} - {name1}
      </div>
    </div>
  );
}
