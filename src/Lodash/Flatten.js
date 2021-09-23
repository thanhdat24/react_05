import _ from "lodash";
import React from "react";

export default function Flatten() {
    // _.flatten (array): là hàm dùng để phân tách các mảng trong mảng phân cấp 
    // __flattenDeep (array): là hàm dùng để phân tách tất cả các mảng trong mảng nhiềU cấp
  const arr = [[1, [2, [3, [4]]], 5]];

  const resultFlatten = _.flatten(arr);
  const resultFlattenDeep = _.flattenDeep(arr);
  console.log("resultFlatten", resultFlatten);
  console.log("resultFlattenDeep", resultFlattenDeep);
  return <div>123</div>;
}
