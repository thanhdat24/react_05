import React from "react";

export default function PaddingMarginDemo() {
  return (
    <div className="container">
      <button className="px-5 mt-2 bg-red-200 -5" style={{ width: "auto" }}>
        padding button
      </button>
      <br />
      <button className="px-3.5 mt-6 bg-purple-200 ">margin button</button>
    </div>
  );
}
