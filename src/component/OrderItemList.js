import React from "react";
import {OrderItem} from "./OrderItem";

export function OrderItemList({orderPrice,items=[]}) {
    return (
        <React.Fragment>
            <h5 className="flex-grow-0"><b>주문 확인</b></h5>
            <ul className="list-group products">
                <div>
                    {items.map(item =>
                        <li key={item.itemName} className="list-group-item d-flex">
                            <OrderItem item={item} />
                        </li>
                    )}
                </div>
            </ul>
            <div className="col text-center price">Total : {orderPrice}원</div>
        </React.Fragment>
    )
}