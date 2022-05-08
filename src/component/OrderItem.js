import React from "react";

export function OrderItem(itemInfo) {
    let item = itemInfo.item
    console.log(item)
    const name = item.itemName;
    const description = item.itemDescription;
    const totalPrice = item.totalItemPrice
    const itemCount = item.itemCount

    return (
        <>
            <div className="col-2">
                <img className="img-fluid" src="https://i.imgur.com/HKOFQYa.jpeg" alt=""/>
            </div>
            <div className="col">
                {name}
            </div>
            <div className="col">
                {description}
            </div>
            <div className="col">
                {itemCount}개
            </div>
            <div className="col">
                {totalPrice}
            </div>
        </>
    )
}