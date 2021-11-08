
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import groceryData from './grocery_sample.json';
import "./SearchBar.css";
import { useState } from 'react';


const GET_ITEMS = gql`
    {
        allItems {
            itemName
            brandName
            aisleId
          }
    }
`;

export default function ShoppingList() {
  const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Items />
      </div>
    </ApolloProvider>
  );
  };

  function Items(){
    const [searchTerm, setSearchTerm] = useState('')


    const { loading, error, data} = useQuery(GET_ITEMS); 
    if (loading) return <span>Loading...</span>;
    if (error) return <span>Error. ${error.message}`</span>;

    const items = data.allItems;
  
    return (
      <div className="search">
        <h1>Items in the shopping list</h1>
        <input type="text" 
               placeholder="Search..." 
               onChange={event => {setSearchTerm(event.target.value)}}/>
        {groceryData.filter((val)=>{
          if (searchTerm == "") {
            return val
          } else if (val.item_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val
          }
        }).map((val,key) => {
            return <div><p>{val.item_name}</p></div>;
        })}
        
        { items.map(item => {
          return <h2 key={item.item_name}></h2>
        }) }
      </div>
    );

  }

