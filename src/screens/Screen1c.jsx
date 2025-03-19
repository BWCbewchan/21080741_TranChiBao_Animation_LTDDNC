import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';

const Box = styled(animated.div)`
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

function Screen1c() {
  const springs = useSpring({
    from: { scale: 0.5, rotate: 0 },
    to: [
      { scale: 1.2, rotate: 180 },
      { scale: 0.8, rotate: 360 },
      { scale: 1, rotate: 0 }
    ],
    config: {
      tension: 180,
      friction: 12
    },
    loop: true
  });

  return (
    <div className="screen-container">
      <Box style={springs} />
    </div>
  );
}

export default Screen1c; 