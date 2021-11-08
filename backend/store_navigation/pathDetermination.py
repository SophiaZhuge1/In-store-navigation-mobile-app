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
        currentOptimalPath = find_shortest_path(matrix, pathTuple[1], pathTuple[0])
        pathMatrix.at[str(pathTuple[1]), str(pathTuple[0])] = currentOptimalPath[0]
        distanceMatrix.at[str(pathTuple[1]), str(pathTuple[0])] = currentOptimalPath[1]

        currentOptimalPath = find_shortest_path(matrix, pathTuple[0], pathTuple[1])
        pathMatrix.at[str(pathTuple[0]), str(pathTuple[1])] = currentOptimalPath[0]
        distanceMatrix.at[str(pathTuple[0]), str(pathTuple[1])] = currentOptimalPath[1]

    return (pathMatrix, distanceMatrix)

def nearest_neighbour_path(pathMatrix, distanceMatrix, entrance_node):
    nextNode = str(entrance_node)
    pathThroughShop = [entrance_node]
    distance = 0

    while pathMatrix.shape[0] > 1:
        prevNode = nextNode
        nextNode = str(distanceMatrix[nextNode].idxmin())
        pathThroughShop = pathThroughShop + pathMatrix.at[prevNode, nextNode]
        distance = distance + distanceMatrix.at[prevNode, nextNode]

        headers = list(pathMatrix.columns.values)
        correctHead = False
        if headers[1] == nextNode:
            correctHead = True

        pathMatrix.drop(prevNode, axis=1, inplace=True)
        distanceMatrix.drop(prevNode, axis=1, inplace=True)
        pathMatrix.drop(index=prevNode, inplace=True)
        distanceMatrix.drop(index=prevNode, inplace=True)

    return (pathThroughShop, distance)

def get_optimal_path_through_store(item_list):
    storeTuple = load_store()
    print("Reducing Matrix...")
    reducedMatrices = generate_reduced_matrices(storeTuple[0], item_list, 12)
    print("\nBest Paths: ")
    print(reducedMatrices[0])
    print("\nBest Distances: ")
    print(reducedMatrices[1])
    print("\nFinding Optimal Path...")
    bestPath = nearest_neighbour_path(reducedMatrices[0], reducedMatrices[1], 12)
    pathToCheckout = find_shortest_path(storeTuple[0], int(bestPath[0][len(bestPath[0]) - 1]) , 13)

    return (bestPath[0], pathToCheckout[0])

result = get_optimal_path_through_store([2,4])
print("Done!")