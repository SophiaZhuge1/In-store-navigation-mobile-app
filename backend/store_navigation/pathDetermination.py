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
    pathToEnd = [end_node]
    while lastNodeInPath != start_node:
        pathToEnd.insert(0, lastNodeInPath)
        lastNodeInPath = previousNode[lastNodeInPath]

    pathToEnd.insert(0, start_node)

    return (pathToEnd, distanceToNode[end_node])

def generate_reduced_matrices(matrix, items_locations, entrance_node):
    distanceDataDictionary = {}
    distanceDummyRow = []
    pathDataDictionary = {}
    pathDummyRow = []
    items_locations.append(entrance_node)

    for i in range(len(items_locations)):
        distanceDummyRow.append(float('inf'))
        pathDummyRow.append([])

    for node in items_locations:
        distanceDataDictionary[str(node)] = distanceDummyRow
        pathDataDictionary[str(node)] = pathDummyRow

    distanceMatrix = pd.DataFrame(distanceDataDictionary, index=[str(i) for i in items_locations])
    pathMatrix = pd.DataFrame(pathDataDictionary, index=[str(i) for i in items_locations])



    pathsToCalculate = []
    for i in range(len(items_locations) - 1):
        for j in range(i + 1, len(items_locations)):
            pathsToCalculate.append((items_locations[i], items_locations[j]))

    for pathTuple in pathsToCalculate:
        currentOptimalPath = find_shortest_path(matrix, pathTuple[0], pathTuple[1])
        pathMatrix.at[str(pathTuple[0]), str(pathTuple[1])] = currentOptimalPath[0]
        pathMatrix.at[str(pathTuple[1]), str(pathTuple[0])] = currentOptimalPath[0]
        distanceMatrix.at[str(pathTuple[0]), str(pathTuple[1])] = currentOptimalPath[1]
        distanceMatrix.at[str(pathTuple[1]), str(pathTuple[0])] = currentOptimalPath[1]

    return (pathMatrix, distanceMatrix)

### Dirty Manual Tests ###

storeTuple = load_store()
reducedMatrices = generate_reduced_matrices(storeTuple[0], [2, 4], 12)
print(reducedMatrices[0])
print(reducedMatrices[1])