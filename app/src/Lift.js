import React from "react";

function Lift({ name, elevationGain, status }) {
  return (
    <div className="flex flex-row w-100 h-40 p-5">
      <div className="flex-row h-50">
        <h1 className="text-4xl text-bold">{name}</h1>
        <h1>{elevationGain}</h1>
        <h1>{status}</h1>
      </div>
    </div>
  );
}
export default Lift;
