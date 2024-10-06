
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MissionBriefing.css';
import { useNavigate } from 'react-router-dom';

const MissionBriefing = ({ isOpen, onClose, missionData }) => {
    const navigator = useNavigate();
    if (!isOpen || !missionData) return null;

    const { index, concluded, title, lat, lng, location, image, text } = missionData;

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
                    <div
                        className={`box button ${concluded ? 'completed' : ''}`}
                        onClick={() => !concluded && navigator("/mission-" + (index + 1))}
                    >
                        <h1>{concluded ? "MISSION COMPLETED" : "START MISSION"}</h1>
                        <div className="icon">
                            {concluded ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm7.72 3.28L8.47 12.78a.75.75 0 1 1 1.06-1.06l2.44 2.44 4.72-4.72a.75.75 0 0 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

                <div className="column column-middle">
                    <div className="top-box">
                        <h3>Location: {location}</h3>
                    </div>
                    <div className="bottom-box">
                        <img src={image} alt="mission-location" />
                    </div>
                </div>
                
                <div className="column column-right">
                    <div className="quiz-question">
                        <h3>Location description</h3>
                        <p>{text}</p>
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
