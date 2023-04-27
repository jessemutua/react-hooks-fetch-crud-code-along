import React from "react";

function Item({ item, onUpdateItem }) {

    function handleAddToCartClick() {
        fetch(`http://localhost:4000/items/${item.id}`, {
                method: "PATCH",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    isInCart: !item.isInCart,
                }),
            })
            .then((r) => r.json())
            .then((updatedItem) => onUpdateItem(updatedItem))
    }

    function handleDeleteClick() {
        console.log(item);
    }

    return ( <
        li className = { item.isInCart ? "in-cart" : "" } >
        <
        span > { item.name } < /span> <
        span className = "category" > { item.category } < /span> <
        button className = { item.isInCart ? "remove" : "add" }
        onClick = { handleAddToCartClick } > { item.isInCart ? "Remove From" : "Add to" }
        Cart <
        /button> <
        button className = "remove"
        onClick = { handleDeleteClick } > Delete < /button> <
        /li>
    );
}

export default Item;