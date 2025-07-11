'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ShaderPlane() {
  const meshRef = useRef()

  // Definimos los uniforms como objeto memoizado
  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_color: { value: new THREE.Color('#00f0ff') },
  }), [])

  // Actualizamos u_time cada frame
  useFrame((state) => {
    uniforms.u_time.value = state.clock.getElapsedTime()
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

const vertexShader = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float u_time;
  uniform vec3 u_color;

  void main() {
    float alpha = 0.5 + 0.5 * sin(u_time);
    gl_FragColor = vec4(u_color, alpha);
  }
`
