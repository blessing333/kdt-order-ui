import React from "react";

export function SummaryItem({productName, count}) {
    return (
        <h6 className="p-0">{productName}<span className="badge bg-dark text-">{count}개</span></h6>
    )
}