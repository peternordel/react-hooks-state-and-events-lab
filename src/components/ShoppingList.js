import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filter, setFilter] = React.useState("All")

  function handleChange (e) {
    setFilter(e.target.value)
  }

  const displayItems = items.filter(item => (
    filter === 'All' ? item : item.category === filter
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange} value={filter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
