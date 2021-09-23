import _ from "lodash";
import React from "react";

export default function SortBy() {
  const users = [
    { id: 5, name: "Fred", age: 48 },
    { id: 9, name: "Kaito", age: 47 },
    { id: 2, name: "Kaito", age: 35 },
    { id: 3, name: "Kaito", age: 36 },
    { id: 4, name: "Bake", age: 40 },
    { id: 7, name: "Juld", age: 34 },
  ];
  const resultSortByAge = _.sortBy(users, [(item) => item.id]);
  console.log("resultSortByAge", resultSortByAge);

  const result = _.sortBy(users, ["name", "id"]);
  console.log("result", result);
  return <div>123</div>;
}
