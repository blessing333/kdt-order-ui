import React from "react";
import {ProductList} from "./ProductList";
import {Summary} from "./Summary";

export function ProductPage({products = [],handleAddClicked,items,handleOrderSubmit,customer}) {
    return (
        <React.Fragment>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                        <ProductList products = {products} onAddClick={handleAddClicked}/>
                    </div>
                    <div className="col-md-4 summary p-4">
                        <Summary items = {items} onOrderSubmit={handleOrderSubmit} customer={customer}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}