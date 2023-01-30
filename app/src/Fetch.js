import React from "react";
import { useState, useEffect } from "react";
import Lift from "./Lift";
const query = `query{
  allLifts{
    name
    elevationGain
    status
  }
}`;

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
};
const Fetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if (loading) {
    return <h1 className="text-4xl">Loading...</h1>;
  }
  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  if (!data) return null;
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
};

export default Fetch;
