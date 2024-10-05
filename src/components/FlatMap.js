import React, { useEffect, useState } from 'react';
import { DeckGL } from '@deck.gl/react';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import { TileLayer } from '@deck.gl/geo-layers';
import { BitmapLayer } from '@deck.gl/layers';
import Papa from 'papaparse';

function FlatMap({ csvUrl, initialViewState, heatmapConfig, tileLayerConfig }) {
  const [heatData, setHeatData] = useState([]);

  useEffect(() => {
    const loadCSV = async () => {
      try {
        const response = await fetch(csvUrl);
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          complete: (results) => {
            const formattedData = results.data.map((row) => {
              const lat = parseFloat(row.lat);
              const lon = parseFloat(row.lon);
              const intensity = parseFloat(row.normalized);

              if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
                console.warn(`Invalid coordinates: lat=${lat}, lon=${lon}`);
                return null;
              }

              return [lon, lat, intensity];
            }).filter(item => item !== null);

            console.log(formattedData)
            setHeatData(formattedData);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV:", error);
      }
    };

    loadCSV();
  }, [csvUrl]);

  const layers = [
    new TileLayer({
      data: tileLayerConfig.data || "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      minZoom: tileLayerConfig.minZoom || 0,
      maxZoom: tileLayerConfig.maxZoom || 19,
      tileSize: tileLayerConfig.tileSize || 256,
      renderSubLayers: (props) => {
        const {
          bbox: { west, south, east, north },
        } = props.tile;

        return new BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north],
        });
      },
    }),
    new HeatmapLayer({
      id: 'heatmap-layer',
      data: heatData,
      getPosition: d => d.slice(0, 2),
      getWeight: d => d[2],
      intensity: heatmapConfig.intensity || 1,
      colorRange: heatmapConfig.colorRange || [
        [0, 255, 255, 255],
        [0, 255, 0, 255],
        [255, 255, 0, 255],
        [255, 0, 0, 255],
      ],
      threshold: heatmapConfig.threshold || 0.9,
    }),
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
        style={{ height: '100vh', width: '100%' }}
      />
    </div>
  );
}

export default FlatMap;
