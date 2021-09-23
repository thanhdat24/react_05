import React from "react";
import _ from "lodash";
export default function ChunkDemo() {
  const arr = ["id", "1", "name", "Dat", "info", "cybersoft"];
  const result = _.chunk(arr, 2);
  console.log("result", result);

  const arrString = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"];
  const resultString = _.chunk(arrString, 3);
  console.log("resultString", resultString);
  return <div>123</div>;
}
