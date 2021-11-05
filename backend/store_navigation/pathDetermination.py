import pandas as pd

def load_store():

    layout = pd.read_csv("data/store_layout.csv")
    metadata = pd.read_csv("data/store_metadata.csv")
    #width = metadata['xNodesWide'][0]
    #height = metadata['yNodesTall'][0]

    return (layout, metadata)

def find_shortest_path(matrix, start_node, end_node):

    distanceToNode = []
    previousNode = []
    for i in range(matrix.shape[0]):
        distanceToNode.append(float('inf'))
        previousNode.append(None)

    distanceToNode[start_node] = 0
    unopptimisedNodes = list(range(matrix.shape[0]))

    while end_node in unopptimisedNodes:
        nodeWithMinDistance = None
        currentMinDistance = float('inf')
        for node in unopptimisedNodes:
            if distanceToNode[node] < currentMinDistance:
                currentMinDistance = distanceToNode[node]
                nodeWithMinDistance = node

        unopptimisedNodes.remove(nodeWithMinDistance)
        if nodeWithMinDistance == end_node:
            break

        headersToFilter = [str(i) for i in unopptimisedNodes]
        connectionsToNeighbours = matrix.loc[nodeWithMinDistance, headersToFilter]
        connectionsToNeighbours.dropna(inplace=True)
        connectionsToNeighbours = pd.to_numeric(connectionsToNeighbours)
        neighbours = list(connectionsToNeighbours.index.values)

        for i in range(len(neighbours)):
            newDistance = currentMinDistance + connectionsToNeighbours[i]
            if newDistance < distanceToNode[int(neighbours[i])]:
                distanceToNode[int(neighbours[i])] = newDistance
                previousNode[int(neighbours[i])] = nodeWithMinDistance

    lastNodeInPath = previousNode[end_node]
    pathToEnd = []
    while lastNodeInPath != start_node:
        pathToEnd.insert(0, lastNodeInPath)
        lastNodeInPath = previousNode[lastNodeInPath]

    pathToEnd.insert(0, start_node)

    return (pathToEnd, distanceToNode[end_node])

### Dirty Manual Tests ###

storeTuple = load_store()
print(find_shortest_path(storeTuple[0], 0, 2))