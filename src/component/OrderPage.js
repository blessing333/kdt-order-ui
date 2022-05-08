import React, {useEffect, useState} from "react";
import { useParams } from 'react-router';
import axios from "axios";
import {OrderItemList} from "./OrderItemList";

export function OrderPage() {
    const [orderDetail,setOrderDetail] = useState([]);
    const orderId = useParams().orderId;

    useEffect(() => {
        console.log(orderId)
        axios.get('http://localhost:8080/api/v1/orders/' + orderId)
            .then(v => {
                setOrderDetail(v.data.orderDetail)
            });
    }, []);

    return (
        <React.Fragment>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                        <OrderItemList orderPrice={orderDetail.orderPrice} items={orderDetail.orderItems}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}