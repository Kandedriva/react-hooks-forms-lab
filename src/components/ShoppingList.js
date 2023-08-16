import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [createItem, setCreateItem] = useState([])

const onItemFormSubmit = (newItem)=>{
  setCreateItem([...createItem, newItem])

} 
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function onSearchChange(event){
    setSearch( event.target.value);
    
  }

  const searchingItem = itemsToDisplay.filter((item)=>{
    if(search===""){
      return item
    } else if(item.name.toLowerCase().includes(search.toLowerCase())){
      return item
    }

    return item.name === search;
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange}  onSearchChange={onSearchChange} />
      <ul className="Items">
        {searchingItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
          

        ))}
      
      </ul>
      <ul className="Items">
      {createItem.map((item) => (<Item key={item.id} name={item.name} category={item.category} />))}
      </ul>
    </div>
  );
}

export default ShoppingList; 
