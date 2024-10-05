import xarray as xr


nc_file = "./data/datasets/volcano_2.nc"  # Replace with your file path
dataset = xr.open_dataset(nc_file)

# Print the dataset information
print(dataset)