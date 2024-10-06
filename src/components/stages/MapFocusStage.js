import React, { useState } from 'react';
import { useMap } from './MapProvider';
import MissionCards from '../MissionCards';
import '../../styles/MapFocusStage.css'

function MapFocusStage({ images }) {
  const { focusOnCoordinates } = useMap();
  const [visibleMissions, setVisibleMissions] = useState([images[0]]);

  const focusOnCoordinatesNow = (coordinates) => {
    if (focusOnCoordinates) {
      focusOnCoordinates(coordinates.lat, coordinates.lng, coordinates.zoom); // Set the zoom level you want
    }
  };

  const addMoreMissions = () => {
    const nextMission = images[visibleMissions.length];
    if (nextMission) {
      setVisibleMissions([...visibleMissions, nextMission]);
    }
  };

  return (
    <div style={{ width: '700px', backgroundColor: '#f0f0f0' }}>
      {visibleMissions.map((mission, index) => (
        <MissionCards key={index}>
          <div className="mission-card-content">
            <div className="mission-card-header">
              <h2>{mission.title}</h2>
              <img src={mission.image} alt={`Mission ${index + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <p>{mission.text}</p>
            </div>
            <button onClick={() => focusOnCoordinatesNow(mission)}>Focus on Coordinates</button>
            {index === visibleMissions.length - 1 && visibleMissions.length < images.length && (
              <button onClick={addMoreMissions}>More</button>
            )}
          </div>
        </MissionCards>
      ))}
    </div>
  );
}

export default MapFocusStage;