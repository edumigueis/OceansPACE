import React, { useState } from 'react';
import { useMap } from './MapProvider';
import '../../styles/MapFocusStage.css';

function MapFocusStage({ images, setMissionStageIndex }) {
  const { focusOnCoordinates } = useMap();
  const [visibleMissions, setVisibleMissions] = useState([images[0]]);
  const [readMissions, setReadMissions] = useState([]); // Adicionando um estado para rastrear as missões lidas

  const focusOnCoordinatesNow = (mission) => {
    if (focusOnCoordinates) {
      focusOnCoordinates(mission.lat, mission.lng, mission.zoom);
    }
  };

  const addMoreMissions = () => {
    const nextMission = images[visibleMissions.length];
    if (nextMission) {
      setVisibleMissions((prevMissions) => [...prevMissions, nextMission]);
    }
  };

  const handleNextStage = (nextIndex) => {
    setMissionStageIndex(nextIndex);
  };

  return (
    <div style={{ width: '700px', backgroundColor: '#f0f0f0' }}>
      {visibleMissions.map((mission, index) => (
        <MissionCards key={index}>
          <div className="mission-card-content">
            <div className="mission-card-header">
              <h2>{mission.title}</h2>
              <img
                src={mission.image}
                alt={`Mission ${index + 1}`}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <p>{mission.text}</p>
            </div>
            <button onClick={() => focusOnCoordinatesNow(mission)}>Focus on Coordinates</button>
            {index === visibleMissions.length - 1 && visibleMissions.length < images.length && (
              <button onClick={addMoreMissions}>More</button>
            )}
            {index === visibleMissions.length - 1 && (
              <button onClick={() => handleNextStage(mission.next)}>Next</button> // Button to go to next stage
            )}
          </div>
        </MissionCards>
      ))}
    </div>
  );
}

export default MapFocusStage;
