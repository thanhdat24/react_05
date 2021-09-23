import _ from "lodash";
import React from "react";

export default function FillDemo() {
  let arr = [
    { id: 1, name: "Dat" },
    { id: 2, name: "Diep" },
    { id: 3, name: "Dat and Diep" },
    { id: 4, name: "Cybersoft" },
  ];
  // Chèn chuỗi "Hello" vào vị trí 1-3
  const result1 = _.fill(arr, { id: "2-3", name: "Hello" }, 1, 3);
  console.log("result1", result1);
  return <div>123</div>;
}
