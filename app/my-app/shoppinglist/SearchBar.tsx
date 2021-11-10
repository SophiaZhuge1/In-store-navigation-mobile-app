import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import groceryData from './items.json';
import ShoppingList from './index';

interface FuncProps{
    items:{id:number, text:string, quantity:number, price:number, description:string}[];
    increaseQuantity(text:string):void;
    decreaseQuantity(text:string):void;
    deleteItem(text:string):void;
    getTotalPrice():number;
    addItem(id:number, name:string, newPrice:number, description:string):void;
  }

const SearchBar:React.FC<FuncProps>=(props)=> {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [add, setAdd] = useState(false);
  const goods = groceryData.filter(entry => entry.model==="app.items")
  const toggle = () => setAdd(!add);


  const handleFilter = (event:any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = goods.filter((value) => {
      return value.fields.item_name.toLowerCase().includes(searchWord.toLowerCase());
    })

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter)
    }

  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  
  /*
  const handleOnClick = (id, name, price) => {
    const item_name = goods.filter((val) => {
      return val.fields.item_name;
    });
    const item_id = goods.filter((val) => {
      return val.fields.item_id;
    });
    const price = goods.filter((val) => {
      return val.fields.price;
    });
    ShoppingList.addItem(item_id, item_name, price);
  }
*/

  return (
    <div className="search">
      <div className="searchInputs" 
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!add)}
        onClick={() => toggle(!add)}>
        <input
          type="text"
          placeholder="Add Item"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
        <div className="header__action">
          {/* <p>{add ? 'Added' : 'Add'}</p> */}
        </div>
      </div>
      {filteredData.length != 0 && (
        <ul className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <li className="list-item" key={value.fields.item_id}>
                <button type="button" onClick={()=> props.addItem(value.fields.item_id, value.fields.item_name, value.fields.price, value.fields.product_description)}>
                  <span>{value.fields.item_name} </span>
                  <span>{value.fields.category}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )}
  export default SearchBar;
