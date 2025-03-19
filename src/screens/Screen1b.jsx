import { useEffect, useState } from 'react';
import soccerBall from '../assets/soccer-ball.png';

function Screen1b() {
  const [position, setPosition] = useState(0);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [ballSize, setBallSize] = useState(120);

  // Điều chỉnh kích thước quả bóng dựa vào kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setBallSize(window.innerWidth < 480 ? 80 : 120);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition(prev => {
        // Bắt đầu từ phía trên của container thay vì 0
        const startPos = -ballSize;
        // Kết thúc ở phía dưới của container
        const endPos = screenHeight - 60 - ballSize; // Trừ chiều cao của navbar
        
        const newPos = prev + 3;
        if (newPos > endPos) {
          return startPos;
        }
        return newPos;
      });
    }, 16);

    return () => clearInterval(moveInterval);
  }, [position, screenHeight, ballSize]);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <img 
        src={soccerBall}
        alt="Soccer Ball"
        style={{ 
          width: `${ballSize}px`,
          height: `${ballSize}px`,
          position: 'absolute',
          top: position,
          transform: 'translateX(-50%)'
        }} 
      />
    </div>
  );
}

export default Screen1b; 