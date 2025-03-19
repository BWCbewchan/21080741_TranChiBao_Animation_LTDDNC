import { useEffect, useState } from 'react'
import styled from 'styled-components'

const ColorCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transition: all 1s ease;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }
`

function Screen2b() {
  const colors = [
    'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(45deg, #ff0844 0%, #ffb199 100%)',
    'linear-gradient(45deg, #da22ff 0%, #9733ee 100%)',
    'linear-gradient(45deg, #ffd700 0%, #ffed4a 100%)'
  ]
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, 1000) // 4000ms / 4 colors = 1000ms per color

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="screen-container">
      <ColorCircle style={{ background: colors[colorIndex] }} />
    </div>
  )
}

export default Screen2b 