import { useState, useEffect } from 'react';
import styled from 'styled-components';

const WelcomeText = styled.h1`
  font-size: 4rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '30px'});
  transition: all 3s ease;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Screen1a() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="screen-container">
      <WelcomeText visible={visible}>
        You are Welcome!
      </WelcomeText>
    </div>
  );
}

export default Screen1a; 