# this script has been made incase we would like to see the pickle version as an excel spreadsheet and ensure 
# the data is correct / edit the CSV file 

import pickle as pkl
import pandas as pd
with open("/pkl_files/profiles.pkl", "rb") as f:
    object = pkl.load(f)
    
df = pd.DataFrame(object)
df.to_csv(r'clustered_profiles.csv')