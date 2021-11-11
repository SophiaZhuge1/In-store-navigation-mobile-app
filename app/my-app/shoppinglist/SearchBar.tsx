import React, { useContext, useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingList from './index';
import { DataStoreContext } from '../store';

export type FilterItems = {
  itemId: number;
  price: string;
  brandName: string;
  itemName: string;
  category: string;
  productDescription: string;
  nutritionalInfo: string;
  aisleId: number;
  shelfId: number;
  position: number;
  ingredients: string;
  allergyInfo: string;
  isVegan: boolean;
  isDiaryFree: boolean;
  isNutFree: boolean;
  isGlutenFree: boolean;
  netWeight: string;
};

interface FuncProps {
  items: {
    id: number;
    text: string;
    quantity: number;
    price: number;
    description: string;
    weight: string;
    brand: string;
  }[];
  increaseQuantity(text: string): void;
  decreaseQuantity(text: string): void;
  deleteItem(text: string): void;
  getTotalPrice(): number;
  addItem(
    id: number,
    name: string,
    newPrice: number,
    description: string,
    weight: string,
    brand: string,
    category: string,
    position: number
  ): void;
}

const SearchBar: React.FC<FuncProps> = (props) => {
  const [filteredData, setFilteredData] = useState<FilterItems[]>([]);
  const [wordEntered, setWordEntered] = useState('');
  const [add, setAdd] = useState(false);
  const { allItems: goods } = useContext(DataStoreContext);
  const toggle = () => setAdd(!add);

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = goods.filter((value) => {
      return value.itemName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div className="search">
      <div
        className="searchInputs"
        tabIndex={0}
        role="button"
        onKeyPress={toggle}
        onClick={toggle}
      >
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
              <li className="list-item" key={key}>
                <button
                  type="button"
                  onClick={() =>
                    props.addItem(
                      value.aisleId,
                      value.itemName,
                      Number(value.price),
                      value.productDescription,
                      value.netWeight,
                      value.brandName,
                      value.category,
                      value.position
                    )
                  }
                >
                  <span>{value.itemName} </span>

                  {/* <span>{value.category}</span> */}
                </button>
                <hr className="rounded"></hr>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default SearchBar;
