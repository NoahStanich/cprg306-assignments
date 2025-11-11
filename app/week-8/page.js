"use client"

import ItemList from "./item-list"
import NewItem from "./new-item"
import MealIdeas from "./meal-ideas"
import { useState } from "react"

export default function Page() {

  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (event) => setSelectedItemName(event.target.value);

  return (
	<main>
	  <h1>Shopping List</h1>
	  <div className="flex">
		<ItemList onSelect={handleItemSelect}/>
		<NewItem onAddItem={handleAddItem}/>
	  </div>
	  <div className="flex">
	  	<MealIdeas />
	  </div>
	</main>
  );
}
