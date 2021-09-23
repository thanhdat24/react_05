import _ from "lodash";
import React from "react";

export default function Include() {
  const arr = ["1", "2", "3"];

  console.log(_.includes(arr, "1"));

  const object = { id: 1, name: "Nguyễn văn a", age: 18 };

  console.log(_.includes(object,"Nguyễn văn a"));
  return <div>123</div>;
}
