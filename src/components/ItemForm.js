import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  
  const [itemCategory, setItemCategory] = useState("produce")
  const [itemName, setItemName] = useState("")
  const [addItem, setAddItem] = useState([])


  function handleSelect(event){
    setItemCategory(event.target.value)
  }

  function handleName(event){
    setItemName(event.target.value)
  }

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  }; 

  function handleSubmit(event){
    event.preventDefault();
   
    const createdItem = [...addItem, newItem];
    setAddItem(createdItem)
    setItemName("")
    setItemCategory("produce")
    props.onItemFormSubmit(newItem)

  }
  

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleName}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleSelect}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
   
    </form>
  );
}

export default ItemForm;
