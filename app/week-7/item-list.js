"use client";

import Item from "./item";
import { useState } from 'react';


export default function ItemList(){
    
    const [sortBy, setSortBy] = useState("name");

    const handleSortChange = (event) => setSortBy(event.target.value);

    if( sortBy == "name" ){
        itemArray.sort( (itemA,itemB) => {
            if( isNaN( parseInt( itemA[sortBy] ) ) ){
                let nameA = itemA.name.toUpperCase();
                let nameB = itemB.name.toUpperCase();
                if(nameA < nameB) return -1;
                if(nameA > nameB) return 1;
                return 0;
            } else {
                let categoryA = itemA.category.toUpperCase();
                let categoryB = itemB.category.toUpperCase();
                if(categoryA < categoryB) return -1;
                if(categoryA > categoryB) return 1;
            }
        } )
    }

    return (
        <div>
            <div>
            <Item name={item1.name} quantity={item1.quantity} category={item1.category}/>
            <Item name={item2.name} quantity={item2.quantity} category={item2.category}/>
            <Item name={item3.name} quantity={item3.quantity} category={item3.category}/>
            <Item name={item4.name} quantity={item4.quantity} category={item4.category}/>
            <Item name={item5.name} quantity={item5.quantity} category={item5.category}/>
            <Item name={item6.name} quantity={item6.quantity} category={item6.category}/>
            <Item name={item7.name} quantity={item7.quantity} category={item7.category}/>
            <Item name={item8.name} quantity={item8.quantity} category={item8.category}/>
            <Item name={item9.name} quantity={item9.quantity} category={item9.category}/>
            <Item name={item10.name} quantity={item10.quantity} category={item10.category}/>
            <Item name={item11.name} quantity={item11.quantity} category={item11.category}/>
            <Item name={item12.name} quantity={item12.quantity} category={item12.category}/>
            </div>
            <div className="text-center mt-4">
                <button className="bg-green-700 text-white rounded cursor-pointer hover:bg-green-600 px-2 py-1" onClick={handleSortChange}>Change sorting method</button>
            </div>
            <div>
                {itemArray.map( (item) => (
                    <Item key={item.id} itemObj={item} />
                ) )}
            </div>
        </div>
        
    )
}