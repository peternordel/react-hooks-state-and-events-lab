import React from "react";

function Item({ name, category }) {
  
  const [isInCart, setisInCart] = React.useState(false)

  function handleCartClick () {
    setisInCart(prevIsInCart => !prevIsInCart)
  }

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {isInCart ? (
        <button className="remove"onClick={handleCartClick}>Remove from Cart</button>
      ) : (
        <button className="add"onClick={handleCartClick}>Add to Cart</button>
      )}
    </li>
  );
}

export default Item;
