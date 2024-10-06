import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import '../styles/MissionBriefing.css'; // Ensure the CSS is correct
import backgroundMusic from '../assets/sounds/background_ocean.wav'; // Background music for the briefing

const MissionBriefing = ({ isOpen, onClose, missionData, pauseMainAudio }) => {
    const [isPlaying, setIsPlaying] = useState(false); // Sound control
    const audioRef = useRef(new Audio(backgroundMusic)); // Reference to the background sound of the briefing

    const toggleAudio = () => {
        const audio = audioRef.current;
        audio.volume = 5 / 20; // Set the volume fixed at 3
        if (isPlaying) {
          audio.pause();
          console.log('Audio paused');
        } else {
          audio.loop = true;
          audio.play().then(() => {
            console.log('Audio is playing at volume:', audio.volume);
          }).catch(error => console.log('Audio play failed:', error));
        }
        setIsPlaying(!isPlaying);
      };
    
      useEffect(() => {
        audioRef.current.volume = 5 / 20; // Set the fixed volume at 3 on load
      }, []);
    

    // If the modal is not open, do not render the content
    if (!isOpen) return null;

    const { title, lat, lng, location, image, question } = missionData; // Mission data

    return (
        <motion.div
            className="modal-overlay" // Modal overlay
            initial={{ opacity: 0 }} // Initial opacity animation
            animate={{ opacity: 1 }} // Animation for 100% opacity
            exit={{ opacity: 0 }} // Exit animation
            onClick={onClose} // Close the modal when clicking outside the content
        >
            <motion.div
                className="modal-content" // Modal content
                initial={{ y: "-100vh" }} // Initial animation from outside the screen (top)
                animate={{ y: "0" }} // Animation to bring the modal to the center
                exit={{ y: "-100vh" }} // Exit animation to go outside the screen
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
            >
                {/* Left column - Mission details */}
                <div className="column column-left">
                    <div className="box spaced">
                        <div className="top">
                            <p>MISSION BRIEFING</p>
                            <h1>{title}</h1>
                        </div>
                        <div className="coordinates">
                            <p>LAT: {lat}, LNG: {lng}</p>
                        </div>
                    </div>
                    <div className="box button">
                        <h1>START MISSION</h1>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Middle column - Location image */}
                <div className="column column-middle">
                    <div className="top-box">
                        <h3>Location: {location}</h3>
                    </div>
                    <div className="bottom-box">
                        <img src={image} alt="mission-location" />
                    </div>
                </div>

                {/* Right column - Question */}
                <div className="column column-right">
                    <div className="quiz-question">
                        <h3>{question}</h3>
                    </div>

                    {/* Button to control sound */}
                    <button
                        onClick={toggleAudio}
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                            zIndex: 11,
                            padding: '10px 20px',
                            backgroundColor: isPlaying ? '#f44336' : '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        {isPlaying ? 'Mute' : 'Unmute'}
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MissionBriefing;
