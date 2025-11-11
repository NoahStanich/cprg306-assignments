"use client";

import { useState } from "react";

export default function NewItem(){

    const [itemQuantity, setQuantity] = useState(1);
    const [itemName, setName] = useState("");
    const [itemCategory, setCategory] = useState("produce");

    const handleNameChange = (event) => setName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    let increaseStyle = "bg-green-700 hover:bg-green-500 text-white rounded p-2 mb-4 cursor-pointer transition-colors";
    if (itemQuantity >= 20) {
        increaseStyle = "text-white rounded p-2 mb-4 bg-gray-700";
    }

    let decreaseStyle = "bg-red-700 hover:bg-red-500 text-white rounded p-2 ml-2 cursor-pointer transition-colors";
    if (itemQuantity <= 1) {
        decreaseStyle = "text-white rounded p-2 ml-2 bg-gray-700";
    }

    const increment = () => {
        if(itemQuantity < 20){
            setQuantity(itemQuantity + 1);
        }
    }

    const decrement = () => {
        if (itemQuantity > 1 ){
            setQuantity(itemQuantity - 1);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name: itemName,
            category: itemCategory,
            quantity: itemQuantity
        };
        console.log(item);
    }

    const resetForm = () => {
        setQuantity(1);
        setName("");
        setCategory("");
    }

    return(
        <form className="p-5 justify-items-center" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="inline-block w-15">Name:</label>
                <input type="text" className="bg-white rounded text-black" value={itemName} onChange={handleNameChange} required />
            </div>
            <div className="mb-4">
                <button className={increaseStyle} onClick={increment}>Increase</button>
                <button className={decreaseStyle} onClick={decrement}>Decrease</button>
                <p>Quantity: {itemQuantity}</p>
            </div>
            <div>
                <label className="inline-block w-20">Category</label>
                <select className="bg-white rounded text-black" value={itemCategory} onChange={handleCategoryChange}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="text-center mt-4">
                <button type="submit" className="bg-green-700 text-white rounded cursor-pointer hover:bg-green-600 px-2 py-1" onClick={resetForm}>Submit</button>
            </div>
        </form>
    )
}