import * as THREE from 'three'
import React, { Suspense, useRef, useMemo, useState } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Water } from 'three-stdlib'
import '../styles/Difficulty.css'
import LpContent from '../components/LpContent.js'

extend({ Water })

function Ocean({ speed }) {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 0,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  // Use the speed passed in props to control the water movement speed
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta * speed))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

export default function App() {
  const [difficulty, setDifficulty] = useState('MEDIUM'); // Default difficulty

  // Function to change speed based on difficulty
  const getSpeed = () => {
    switch (difficulty) {
      case 'EASY':
        return 0.5; // Slow speed
      case 'MEDIUM':
        return 1; // Normal speed
      case 'HARD':
        return 2; // Fast speed
      default:
        return 1; // Default to normal speed
    }
  };

  return (
    <>
      <>
        <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
          <pointLight position={[100, 100, 100]} />
          <pointLight position={[-100, -100, -100]} />
          <Suspense fallback={null}>
            <Ocean speed={getSpeed()} /> {/* Pass the calculated speed */}
          </Suspense>
          <Sky 
            scale={1000} 
            sunPosition={[0, -2, -55]}  
            sunColor="white"         
            turbidity={6}              
            rayleigh={1}               
          />
        </Canvas>
      </>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
        <LpContent setDifficulty={setDifficulty} /> {/* Pass setDifficulty to change difficulty */}
      </div>
    </>
  )
}
