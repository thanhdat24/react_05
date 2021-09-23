import React from "react";
import Card from "./Card";

export default function BaiTapTongHop() {
  return (
    <div className="container mt-8">
      <h1 className=" text-center text-green-500 text-3xl mb-3">
        Welcome to CyberSoft frontend with tailwind
      </h1>
      <div className="grid grid-cols-3 gap-3">
        <Card />
        <Card /> 
        <Card />
      </div>
    </div>
  );
}
