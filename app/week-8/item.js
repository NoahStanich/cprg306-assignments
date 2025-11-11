"use client";

import { useState } from 'react';

export default function Item({ itemObj }, {onSelect} ){

    let {id, name, quantity, category} = itemObj;

    return(
        <div className="my-4">
            <ul onClick={onSelect}>
                <li onSelect={id}>{id}</li>
                <li onSelect={name}>{name}</li>
                <li onSelect={quantity}>{quantity}</li>
                <li onSelect={category}>{category}</li>
            </ul>
        </div>
    );
}