import xarray as xr
import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

def haversine(lon1, lat1, lon2, lat2):
    """Calculate the great circle distance in kilometers between two points on the earth."""
    lon1, lat1, lon2, lat2 = map(np.radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1
    dlat = lat2 - lat1 
    a = np.sin(dlat / 2)**2 + np.cos(lat1) * np.cos(lat2) * np.sin(dlon / 2)**2
    c = 2 * np.arcsin(np.sqrt(a)) 
    r = 6371  # Radius of earth in kilometers
    return c * r

def remove_trailing_newline(file_path):
    """Remove trailing newline from a file."""
    with open(file_path, 'rb+') as f:
        f.seek(-1, 2)
        if f.read(1) == b'\n':
            f.seek(-1, 2)
            f.truncate()

def nc_to_csv(nc_file, output_csv, variable_name, center_lat, center_lon, radius_km):
    """Convert NetCDF data to CSV, filtering and clustering data."""
    try:
        dataset = xr.open_dataset(nc_file)
        print("NetCDF file loaded successfully!")

        if variable_name not in dataset:
            print(f"Variable '{variable_name}' not found in the dataset.")
            return
        
        variable_data = dataset[variable_name]
        df = variable_data.to_dataframe().reset_index()

        # Calculate distances using vectorized operations
        distances = haversine(df['lon'].values, df['lat'].values, center_lon, center_lat)
        
        # Filter DataFrame based on distance and non-null values
        df_filtered = df[(distances <= radius_km) & (df[variable_name].notna())]

        # Convert and save to CSV
        df_filtered.to_csv(output_csv, index=False)

        # Remove the trailing newline
        remove_trailing_newline(output_csv)

        print(f"Filtered and clustered data saved to CSV: {output_csv}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    nc_file = "./data/datasets/mauritania.nc"
    output_csv = "./data/output/converted/mauritania.csv"
    #variable_name = "Rrs_531"  #vulcan
    #variable_name = "adg_unc_443" #oman
    #variable_name = "bb_645" #saginaw
    #variable_name = "bb_678" #salton
    variable_name = "aot_869" #mauritania

    # oman
    #center_lat = 20.51865
    #center_lon = 56.22683
    #radius_km = 1600
    
    #vulcan
    #center_lat = -20.56944
    #center_lon = -175.37863
    #radius_km = 800

    #saginaw
    #center_lat = 43.81451
    #center_lon = -83.66810
    #radius_km = 400

    #salton
    #center_lat = 33.37499
    #center_lon = -115.88938
    #radius_km = 800

    #mauritania
    center_lat = 19.96057
    center_lon = -16.70246
    radius_km = 1600


    nc_to_csv(nc_file, output_csv, variable_name, center_lat, center_lon, radius_km)
