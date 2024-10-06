import React, { createContext, useContext } from 'react';

const MapContext = createContext();

export const useMap = () => {
  return useContext(MapContext);
};

export const MapProvider = ({ children, focusOnCoordinates }) => {
  return (
    <MapContext.Provider value={{ focusOnCoordinates }}>
      {children}
    </MapContext.Provider>
  );
};