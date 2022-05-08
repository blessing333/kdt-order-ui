import {SummaryItem} from "./SummaryItem";
import React from "react";

export function Summary({items = [], onOrderSubmit, customer={}}) {
    const totalPrice = items.reduce((prev, curr) => prev + (curr.price * curr.count), 0)

    const handleSubmit = (e) => {
        let orderItems = []
        items.map(v => {
            let orderItem = {
                itemId: v.id,
                itemCount: v.count
            }
            orderItems.push(orderItem)
        })
        let order = {
            buyerId: customer.id,
            orderItems: orderItems
        }
        onOrderSubmit(order);
    }

    return (
        <>
            <div>
                <h5 className="m-0 p-0"><b>Summary</b></h5>
            </div>
            <hr/>
            <div className="row">
                {items.map(v => <SummaryItem key={v.id} count={v.count} productName={v.name}/>)}
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">주문자</label>
                    <input type="text" className="form-control" value={customer.name} id="postcode" readOnly={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">이메일</label>
                    <input type="email" className="form-control mb-1" value={customer.email} id="email" readOnly={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">주소</label>
                    <input type="text" className="form-control mb-1" value={customer.address} id="address" readOnly={true}/>
                </div>
                <div>당일 오후 2시 이후의 주문은 다음날 배송을 시작합니다.</div>
            </form>
            <div className="row pt-2 pb-2 border-top">
                <h5 className="col">총금액</h5>
                <h5 className="col text-end">{totalPrice}원</h5>
            </div>
            <button className="btn btn-dark col-12" onClick={handleSubmit}>결제하기</button>
        </>
    )
}