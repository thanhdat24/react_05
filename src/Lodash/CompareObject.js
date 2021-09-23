import React from "react";
import _ from "lodash";
export default function CompareObject() {
  const arrA = [1, 2];
  const arrB = [2, 1];

  const result = _.isEqual(arrA.sort(), arrB.sort());
  console.log("result", result);

  const arrObject1 = [
    { id: 1, name: "Khai" },
    { id: "2", name: "Minh" },
  ];
  const arrObject2 = [
    { id: 1, name: "Khai" },
    { id: "2", name: "Hang" },
    { id: "3", name: "Minh" },
  ];
  // So sánh thằng nào thì để thằng đó trưỚc , VD so sánh th arrObject2 với arrObject1 thì in ra kq  arrObject2 khác gì so với arrObject1
  const resultObject = _.differenceWith(arrObject2, arrObject1, _.isEqual);
  console.log("resultObject", resultObject);
  return <div>123</div>;
}
