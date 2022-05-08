import React from "react";

export function Product(props) {
    console.log(props)
    const productId = props.id;
    const productName = props.name;
    const productDescription = props.description;
    const category = props.category;
    const price = props.price;
    const handleAddBtnClicked = e =>{
        console.log(productId)
        props.onAddClick(productId);
    };
    return (
        <>
            <div className="col-2">
                <img className="img-fluid" src="https://i.imgur.com/HKOFQYa.jpeg" alt=""/>
            </div>
            <div className="col">
                <div className="row">{category}</div>
                <div className="row">{productName}</div>
                <div className="row small text-muted">{productDescription}</div>
            </div>
            <div className="col text-center price">{price}원</div>
            <div className="col text-end action">
                <button onClick={handleAddBtnClicked} className="btn btn-small btn-outline-dark">추가</button>
            </div>
        </>
    )
}