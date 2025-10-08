"use client";

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    let increaseStyle = "bg-green-700 hover:bg-green-500 text-white rounded p-2 mb-4 cursor-pointer transition-colors";
    if (quantity >= 20) {
        increaseStyle = "text-white rounded p-2 mb-4 bg-gray-700";
    }

    let decreaseStyle = "bg-red-700 hover:bg-red-500 text-white rounded p-2 ml-2 cursor-pointer transition-colors";
    if (quantity <= 1) {
        decreaseStyle = "text-white rounded p-2 ml-2 bg-gray-700";
    }

    const increment = () => {
        if( quantity < 20 ){
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if ( quantity > 1 ){
            setQuantity(quantity - 1);
        }
    }

    return(
        <div className="text-center p-4">
            <button className={increaseStyle} onClick={increment}>Increase</button>
            <button className={decreaseStyle} onClick={decrement}>Decrease</button>
            <p>Quantity: {quantity}</p>
        </div>
    )
}