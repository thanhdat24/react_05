import React from "react";

export default function FlexDemo() {
  return (
    <div className="w-screen h-screen bg-purple-400">
      <div className="flex flex-row items-center gap-4 justify-center w-full bg-green-400 h-1/2">
        <div className="w-1/4 h-1/4 bg-red-400 flex-item"></div>
        <div className="w-1/4 h-1/4 bg-blue-400 flex-item"></div>
        <div className="w-1/4 h-1/4 bg-yellow-400 flex-item"></div>
      </div>
    </div>
  );
}
