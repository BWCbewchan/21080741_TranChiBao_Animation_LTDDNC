import { useEffect, useState } from 'react'
import styled from 'styled-components'

const RotatingSquare = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  box-shadow: 0 0 20px rgba(0, 242, 254, 0.5);
  position: relative;
  transform-style: preserve-3d;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    opacity: 0.3;
  }

  &::before {
    transform: rotateX(60deg);
  }

  &::after {
    transform: rotateY(60deg);
  }
`

function Screen2a() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const animate = () => {
      setRotation(prev => (prev + 2) % 360)
      requestAnimationFrame(animate)
    }
    const animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div className="screen-container">
      <RotatingSquare
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      />
    </div>
  )
}

export default Screen2a 