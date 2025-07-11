// components/LerpFollower.js
'use client'

import { useRef, useState } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

function lerp(a, b, t) {
  return a + (b - a) * t
}

export default function LerpFollower() {
  const ref = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  useAnimationFrame(() => {
    pos.current.x = lerp(pos.current.x, mouse.x, 0.1)
    pos.current.y = lerp(pos.current.y, mouse.y, 0.1)
  })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen bg-gray-100 overflow-hidden"
    >
      <motion.div
        style={{
          position: 'absolute',
          left: pos.current.x,
          top: pos.current.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-10 h-10 bg-indigo-500 rounded-full pointer-events-none"
      />
    </div>
  )
}
