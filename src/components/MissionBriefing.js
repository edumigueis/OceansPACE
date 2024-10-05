import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion'; // Para animações
import '../styles/MissionBriefing.css'; // Certifique-se que o CSS está correto
import backgroundMusic from '../assets/sounds/background_ocean.wav'; // Música de fundo para o briefing

const MissionBriefing = ({ isOpen, onClose, missionData, pauseMainAudio }) => {
    const [isPlaying, setIsPlaying] = useState(false); // Controle do som
    const audioRef = useRef(new Audio(backgroundMusic)); // Referência ao som de background do briefing

    const toggleAudio = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause(); // Pausa a música do briefing
        } else {
            pauseMainAudio(); // Pausa o som da página principal
            audio.loop = true; // Define a música para tocar em loop
            audio.play().catch(error => console.log('Audio play failed:', error)); // Toca a música
        }
        setIsPlaying(!isPlaying); // Alterna entre tocar e pausar
    };

    // Se o modal não estiver aberto, não renderiza o conteúdo
    if (!isOpen) return null;

    const { title, lat, lng, location, image, question } = missionData; // Dados da missão

    return (
        <motion.div
            className="modal-overlay" // Overlay do modal
            initial={{ opacity: 0 }} // Animação inicial de opacidade zero
            animate={{ opacity: 1 }} // Animação de opacidade 100%
            exit={{ opacity: 0 }} // Animação de fechamento
            onClick={onClose} // Fecha o modal ao clicar fora do conteúdo
        >
            <motion.div
                className="modal-content" // Conteúdo do modal
                initial={{ y: "-100vh" }} // Animação inicial de fora da tela (parte superior)
                animate={{ y: "0" }} // Animação para trazer o modal ao centro
                exit={{ y: "-100vh" }} // Animação de saída para fora da tela
                onClick={(e) => e.stopPropagation()} // Previne que o clique dentro do modal feche ele
            >
                {/* Coluna esquerda - Detalhes da missão */}
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

                {/* Coluna do meio - Imagem da localização */}
                <div className="column column-middle">
                    <div className="top-box">
                        <h3>Location: {location}</h3>
                    </div>
                    <div className="bottom-box">
                        <img src={image} alt="mission-location" />
                    </div>
                </div>

                {/* Coluna direita - Questão */}
                <div className="column column-right">
                    <div className="quiz-question">
                        <h3>{question}</h3>
                    </div>

                    {/* Botão para controlar o som */}
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
