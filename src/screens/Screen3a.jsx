import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  Webkit-user-select: none;
  Moz-user-select: none;
  ms-user-select: none;
  overflow: hidden;
`

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  cursor: ${props => props.isDragging ? 'grabbing' : 'grab'};
  transition: ${props => props.isDragging ? 'none' : 'all 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)'};
  background: ${props => props.isDragging 
    ? 'linear-gradient(45deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'
    : 'linear-gradient(45deg, #2196f3 0%, #4facfe 100%)'};
  box-shadow: ${props => props.isDragging 
    ? '0 0 20px rgba(255, 60, 172, 0.5)'
    : '0 0 15px rgba(33, 150, 243, 0.5)'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  transform: translate(-50%, -50%);
  left: ${props => props.position.x}px;
  top: ${props => props.position.y}px;
  user-select: none;
  Webkit-user-select: none;
  Moz-user-select: none;
  ms-user-select: none;
  Webkit-user-drag: none;
  Webkit-touch-callout: none;
`

function Screen3a() {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 })

  // Tính toán vị trí trung tâm khi component mount và khi resize
  useEffect(() => {
    const updateCenterPosition = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setCenterPos({ x: centerX, y: centerY });
      setPosition({ x: centerX, y: centerY });
    };

    updateCenterPosition();
    window.addEventListener('resize', updateCenterPosition);

    return () => window.removeEventListener('resize', updateCenterPosition);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    
    // Tính toán offset giữa vị trí click và vị trí của hình tròn
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    // Cập nhật vị trí dựa trên vị trí chuột và offset
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setPosition(centerPos);
  };

  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    overflow: 'hidden',
  };

  const textStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '0',
    right: '0',
    textAlign: 'center',
    color: 'white',
    fontSize: '16px',
    padding: '10px',
    background: 'rgba(0,0,0,0.5)',
    userSelect: 'none',
    WebkitUserSelect: 'none',
  };

  return (
    <div className="screen-container">
      <div className="screen-content">
        <div 
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            overflow: 'hidden',
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              position: 'absolute',
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
              background: isDragging 
                ? 'linear-gradient(45deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'
                : 'linear-gradient(45deg, #2196f3 0%, #4facfe 100%)',
              boxShadow: isDragging 
                ? '0 0 40px rgba(255, 60, 172, 0.5)'
                : '0 0 30px rgba(33, 150, 243, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: 'translate(-50%, -50%)',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitUserDrag: 'none',
              WebkitTouchCallout: 'none',
            }}
            onMouseDown={handleMouseDown}
          >
            {isDragging ? 'Thả ra' : 'Kéo tôi'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Screen3a 