import { FilterItems } from "../shoppinglist/SearchBar";

export type NodeId = number;
export type ResponseData = {
  path_for_items: NodeId[];
  path_to_checkout: NodeId[];
};

export const mockNodes: NodeId[] = [78, 20, 43, 55];

export function getPath(
  itemNodes: NodeId[],
  callback: (responseData: ResponseData) => void
) {
  const JSONPayload = {
    list_of_item_locations: itemNodes,
  };
  let headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json',
  };

  fetch('http://localhost:8000/navigation/', {
    method: 'POST',
    body: JSON.stringify(JSONPayload),
    headers: headersList,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data: ResponseData) {
      callback(data);
    });
}

export const getAllItemsFromBackend = (
  callback: (allItems: FilterItems[]) => void
) => {
  let headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json',
  };

  let body = JSON.stringify({
    query: `{
      allItems {
        aisleId
        shelfId
        position
        ingredients
        allergyInfo
        nutritionalInfo
        ingredients
        allergyInfo
        isVegan
        isDiaryFree
        isNutFree
        isGlutenFree
        netWeight
        itemName
        price
        category
        productDescription
        brandName
      }
    }`,
  });

  return fetch('http://localhost:8000/graphql/', {
    method: 'POST',
    headers: headersList,
    body,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.info(data);
      callback(data.data.allItems);
    });
};
