import pandas as pd
import numpy as np
import os

# Define the chlor_a scale
chlor_a_scale = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20]
backscattering_scale = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2]
vulcan_scale = [0.000,0.005, 0.010, 0.015]
oman_scale = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1]
saginaw_scale = [0.0001, 0.0002, 0.0005, 0.001, 0.002, 0.050, 0.01, 0.02, 0.05, 0.1]
salton_scale = [0.0001, 0.0002, 0.0005, 0.001,0.002, 0.005, 0.01, 0.02, 0.05, 0.1]
scale_mauritania = [0.00,0.05,0.1, 0.15,0.2, 0.25]

normalized_scale = np.linspace(0, 1, len(backscattering_scale))  # Corresponding normalized values

def normalize_value(value, scale, normalized):
    if value <= scale[0]:
        return 0
    if value >= scale[-1]:
        return 1
    for i in range(1, len(scale)):
        if scale[i-1] <= value <= scale[i]:
            fraction = (value - scale[i-1]) / (scale[i] - scale[i-1])
            return normalized[i-1] + fraction * (normalized[i] - normalized[i-1])
    return 1

def normalize_chlor_a(csv_file, output_file):
    # Ensure the directory exists
    output_dir = os.path.dirname(output_file)
    os.makedirs(output_dir, exist_ok=True)

    df = pd.read_csv(csv_file)
    #df['normalized'] = df['adg_unc_443'].apply(lambda x: normalize_value(x,oman_scale , normalized_scale))
    #df['normalized'] = df['Rrs_531'].apply(lambda x: normalize_value(x, vulcan_scale, normalized_scale))
    #df['normalized'] = df['bb_645'].apply(lambda x: normalize_value(x, saginaw_scale, normalized_scale))
    #df['normalized'] = df['bb_678'].apply(lambda x: normalize_value(x, salton_scale, normalized_scale))
    df['normalized'] = df['aot_869'].apply(lambda x: normalize_value(x, scale_mauritania, normalized_scale))
    df.to_csv(output_file, index=False)
    print(f"Normalized data saved to {output_file}")

csv_file = './data/output/converted/mauritania.csv'
output_file = './data/output/normalized/mauritania_norm.csv'
normalize_chlor_a(csv_file, output_file)
