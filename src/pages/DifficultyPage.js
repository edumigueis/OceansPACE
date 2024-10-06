import * as THREE from 'three';
import React, { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Water } from 'three-stdlib';
import '../styles/Difficulty.css';
import LpContent from '../components/LpContent.js';
import backgroundMusic from '../assets/sounds/background_water.mp3';

extend({ Water });

function Ocean({ speed }) {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);

  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x003249,
      distortionScale: 0,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  );

  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta * speed));

  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}

export default function App() {
  const [difficulty, setDifficulty] = useState('MEDIUM');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.loop = true;
      audio.play().catch((error) => console.log('Audio play failed:', error));
    }
    setIsPlaying(!isPlaying);
  };

  const getSpeed = () => {
    switch (difficulty) {
      case 'EASY':
        return 0.5;
      case 'MEDIUM':
        return 1;
      case 'HARD':
        return 2;
      default:
        return 1;
    }
  };

  const setDifficultyAndSave = (level) => {
    setDifficulty(level);
    localStorage.setItem('selectedDifficulty', level);
  };

  const goToNextPage = () => {
    window.location.href = '/main';
  };

  return (
    <>
      <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <Suspense fallback={null}>
          <Ocean speed={getSpeed()} />
        </Suspense>
        <Sky scale={1000} sunPosition={[0, 0, 50]} sunColor="yellow" turbidity={6} rayleigh={2} />
      </Canvas>

      <div className="lp-content-container">
        <LpContent setDifficulty={setDifficultyAndSave} />
      </div>

      <button
        onClick={toggleAudio}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 11,
          padding: '10px 20px',
          backgroundColor: isPlaying ? '#ECAA01' : '#1CAAD9',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isPlaying ? 'Mute' : 'Unmute'}
      </button>
      <button className="start-mission-button" onClick={goToNextPage}>
        START MISSION
      </button>
    </>
  );
}
