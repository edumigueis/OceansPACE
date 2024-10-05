import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MissionBriefing.css';
import oman from '../assets/missions/oman.jpg'

const MissionBriefing = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

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
                    <div className="box">
                        <p>MISSION BRIEFING</p>
                        <h1>The Omani Bloom</h1>
                    </div>
                    <div className="box button">
                        <h1>PLAY</h1>
                        <div className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                        </svg>
                        </div>
                    </div>
                </div>
                <div className="column column-middle">
                    <div className="top-box">
                        <h3>Location: The omani sea</h3>
                    </div>
                    <div className="bottom-box">
                        <img src={oman}></img>
                    </div>
                </div>
                <div className="column column-right">
                    <div className="quiz-question">
                        <h3>What is the capital of France?</h3>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MissionBriefing;
