import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MissionBriefing.css';
import { useNavigate } from 'react-router-dom';

const MissionBriefing = ({ isOpen, onClose, missionData }) => {
    const navigator = useNavigate();
    if (!isOpen || !missionData) return null;

    const { index, title, lat, lng, location, image, question } = missionData;

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
                    <div className="box button" onClick={() => navigator("/mission-" + (index + 1))}>
                        <h1>START MISSION</h1>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                            </svg>
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
                        <h3>{question}</h3>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MissionBriefing;
