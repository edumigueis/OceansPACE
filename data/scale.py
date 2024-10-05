import pandas as pd
import numpy as np
import os

# Define the chlor_a scale
chlor_a_scale = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20]
backscattering_scale = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2]
vulcano_2_scale = [0.000,0.005, 0.010, 0.015]
absorbtion_scale = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1]

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
    df['bb_443_normalized'] = df['Rrs_531'].apply(lambda x: normalize_value(x, vulcano_2_scale, normalized_scale))
    df.to_csv(output_file, index=False)
    print(f"Normalized data saved to {output_file}")

csv_file = './data/output/converted/volcano_2.csv'
output_file = './data/output/normalized/volcano_2.csv'
normalize_chlor_a(csv_file, output_file)
