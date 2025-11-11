"use client"

import ItemList from "./item-list"
import NewItem from "./new-item"

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <ItemList />
      <NewItem onAddItem={handleAddItem}/>
    </main>
  );
}
