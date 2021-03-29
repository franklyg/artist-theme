import React, { useRef, useState } from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Canvas, useFrame } from 'react-three-fiber';

function Circle(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += .003))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[10, 10, 10]}>
      <sphereBufferGeometry attach="geometry" args={[1, 10, 10]} />
      <meshBasicMaterial attach="material" color="black" wireframe />
    </mesh>
  )
}

const CircleMesh = ({ slice }) => (
  <>
    <Canvas colorManagement style={{ height: '100vh !important', background: '#cae1e5' }}>
      {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
      <Circle position={[0, 0, -10]} />
    </Canvas> 
  </>
);

export default CircleMesh;
