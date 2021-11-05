import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const GET_ITEMS = gql`
    {
        allItems {
            itemName
            brandName
            aisleId
          }
    }
`;

function Items(){

    const { loading, error, data} = useQuery(GET_ITEMS); 
    if (loading) return 'Loading...';
    if (error) return `Error. ${error.message}`;

    const items: any[] = data.allItems;
  
    return (
      <div>
        <h1>Items in the shopping list</h1>
        {items.map(item => {
          return <h2 key={item.node.item_name}></h2>
        }) }
      </div>
    );
  }

  export default Items;