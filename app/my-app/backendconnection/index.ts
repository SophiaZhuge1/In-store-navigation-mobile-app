export type NodeId = number;
export type ResponseData = {
  path_for_items: NodeId[],
  path_to_checkout: NodeId[]
}

export const mockNodes: NodeId[] = [78,20,43,55];

export function getPath(itemNodes: NodeId[], callback: (responseData: ResponseData) => void){
  const JSONPayload = {
    list_of_item_locations: itemNodes
  };
  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
   }
   
   fetch("http://localhost:8000/navigation/", { 
     method: "POST",
     body: JSON.stringify(JSONPayload),
     headers: headersList
   }).then(function(response) {
     return response.json();
   }).then(function(data: ResponseData) {
     callback(data);
   })
}