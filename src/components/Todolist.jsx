import React from "react";

function items() {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default items;
