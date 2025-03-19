import { useEffect, useState } from 'react'
import styled from 'styled-components'

const AnimatedBox = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  border-radius: 10px;
  position: relative;
  transition: all 1s ease;
`

function Screen2c() {
  const [animation, setAnimation] = useState(0)

  const animations = [
    { transform: 'scale(1.5) rotate(180deg)', background: 'linear-gradient(45deg, #ff0844, #ffb199)' },
    { transform: 'translateY(-100px)', background: 'linear-gradient(45deg, #da22ff, #9733ee)' },
    { transform: 'skew(20deg)', background: 'linear-gradient(45deg, #ffd700, #ffed4a)' }
  ]

  useEffect(() => {
    const runAnimations = async () => {
      for (let i = 0; i < animations.length; i++) {
        setAnimation(i)
        await new Promise(resolve => setTimeout(resolve, 1500))
      }
      setAnimation(0)
    }

    const interval = setInterval(runAnimations, 4500)
    runAnimations()

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="screen-container">
      <AnimatedBox style={animations[animation]} />
    </div>
  )
}

export default Screen2c 