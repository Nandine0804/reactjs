import React from "react";

const dishes = [
  "Black Bean Soup",
  "Macaroni and Cheese",
  "Salmon and Potatoes",
  "Pizza",
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function Main() {
  return (
    <section className="flex flex-wrap  flex-1 text-center ">
      <ul className="flex flex-row  flex-wrap p-10 items-center gap-x-4">
        {dishObjects.map((m) => (
          <li className="text-2xl" key={m.id}>
            <img
              src="https://images.unsplash.com/photo-1617474019977-0e105d1b430e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80"
              alt="pic"
              className="w-80 h-90 mb-10 mt-10 gap-x-4 rounded-lg shadow-lg shadow-black-500/20"
            />
            {m.title}
          </li>
        ))}
        {dishObjects.map((m) => (
          <li className="text-2xl" key={m.id}>
            <img
              src="https://images.unsplash.com/photo-1617474019977-0e105d1b430e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80"
              alt="pic"
              className="w-80 h-90 gap-x-4 rounded-lg shadow-lg shadow-black-500/20"
            />
            {m.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;
