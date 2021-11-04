import pandas as pd

def load_store():

    layout = pd.read_csv("data/store_layout.csv")
    metadata = pd.read_csv("data/store_metadata.csv")
    width = metadata['xNodesWide'][0]
    height = metadata['yNodesTall'][0]

    return (layout, metadata)

