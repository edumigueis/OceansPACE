import * as THREE from 'three';
import React, { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Water } from 'three-stdlib';
import { motion } from 'framer-motion';
import '../styles/Difficulty.css';
import backgroundMusic from '../assets/sounds/background_water.mp3';

// Import the badges
import aerosols from '../assets/badges/aerosols.png';
import bloom from '../assets/badges/bloom.png';
import cyano from '../assets/badges/cyano.png';
import mudMistery from '../assets/badges/mud-mistery.png';
import springs from '../assets/badges/springs.png';


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
      audio.play().catch(error => console.log('Audio play failed:', error));
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

  return (
    <>
      <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <Suspense fallback={null}>
          <Ocean speed={getSpeed()} />
        </Suspense>
        <Sky 
          scale={1000} 
          sunPosition={[0, 0, 50]} 
          sunColor="yellow"          
          turbidity={6}             
          rayleigh={2}              
        />
      </Canvas>

      <div className="overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        zIndex: 10
      }}>
        {/* Logo */}
        <motion.img 
          src={'logooceanspace.png'} 
          alt="OceansPACE Logo" 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          style={{ width: '150px', marginBottom: '20px' }}
        />

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 2 }} 
          style={{ fontSize: '48px', marginBottom: '10px' }}
        >
          OceansPACE
        </motion.h1>

        {/* Congratulatory Message */}
        <motion.p 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 2.5 }} 
          style={{ fontSize: '24px', marginBottom: '30px' }}
        >
          Congratulations! You have successfully completed all the missions.
        </motion.p>

        {/* Badges with animation */}
        <motion.div 
          className="badges"
          style={{
            display: 'flex',
            gap: '20px'
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, staggerChildren: 0.2 }}
        >
          <motion.img src={aerosols} alt="Aerosols Badge" style={{ width: '80px' }} />
          <motion.img src={bloom} alt="Bloom Badge" style={{ width: '80px' }} />
          <motion.img src={cyano} alt="Cyano Badge" style={{ width: '80px' }} />
          <motion.img src={mudMistery} alt="Mud Mistery Badge" style={{ width: '80px' }} />
          <motion.img src={springs} alt="Springs Badge" style={{ width: '80px' }} />
        </motion.div>
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
    </>
  );
}
