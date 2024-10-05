// Correct imports
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion'; 
import '../styles/MissionBriefing.css';
import backgroundMusic from '../assets/sounds/background_ocean.wav';

// Component declaration
const MissionBriefing = ({ isOpen, onClose, missionData }) => {
    // Conditional rendering - if the modal is not open, return null
    if (!isOpen) return null;

    // Destructuring mission data
    const { title, lat, lng, location, image, question } = missionData;

    // State and audio reference
    const [isPlaying, setIsPlaying] = useState(false); // Controls if audio is playing
    const audioRef = useRef(new Audio(backgroundMusic)); // Creates a reference to the audio

    // Function to toggle play/pause for the audio
    const toggleAudio = () => {
        const audio = audioRef.current; 
        if (isPlaying) {
            audio.pause(); // Pauses the audio
        } else {
            audio.loop = true; // Plays in loop
            audio.play().catch(error => console.log('Audio play failed:', error)); // Attempts to play audio and handles errors
        }
        setIsPlaying(!isPlaying); // Toggles the playing state
    };

    // JSX for modal return
    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="modal-content"
                initial={{ y: "-100vh" }}
                animate={{ y: "0" }}
                exit={{ y: "-100vh" }}
                onClick={(e) => e.stopPropagation()}
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

                {/* Middle column - Mission location */}
                <div className="column column-middle">
                    <div className="top-box">
                        <h3>Location: {location}</h3>
                    </div>
                    <div className="bottom-box">
                        <img src={image} alt="mission-location" />
                    </div>
                </div>

                {/* Right column - Mission question */}
                <div className="column column-right">
                    <div className="quiz-question">
                        <h3>{question}</h3>
                    </div>

                    {/* Button to control audio */}
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
