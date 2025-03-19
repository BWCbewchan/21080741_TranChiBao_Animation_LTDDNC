import { useState, useEffect } from 'react'
import Screen1a from './screens/Screen1a'
import Screen1b from './screens/Screen1b'
import Screen1c from './screens/Screen1c'
import Screen2a from './screens/Screen2a'
import Screen2b from './screens/Screen2b'
import Screen2c from './screens/Screen2c'
import Screen3a from './screens/Screen3a'
import Screen3b from './screens/Screen3b'
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('1a')
  const [menuVisible, setMenuVisible] = useState(true)

  const screens = {
    "câu 1": {
      "1a": "Text Fade Effect",
      "1b": "Bouncing Ball",
      "1c": "Spring Animation"
    },
    "câu 2": {
      "2a": "Infinite Rotation",
      "2b": "Color Transition",
      "2c": "Sequential Effects"
    },
    "câu 3": {
      "3a": "Drag & Return",
      "3b": "Swipe Gallery"
    }
  }

  // Ngăn chặn các tương tác mặc định
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();

    // Ngăn chặn menu chuột phải
    document.addEventListener('contextmenu', preventDefault);
    // Ngăn chặn kéo thả
    document.addEventListener('dragstart', preventDefault);
    // Ngăn chặn chọn text
    document.addEventListener('selectstart', preventDefault);
    // Ngăn chặn copy
    document.addEventListener('copy', preventDefault);
    // Ngăn chặn cut
    document.addEventListener('cut', preventDefault);
    // Ngăn chặn paste
    document.addEventListener('paste', preventDefault);

    return () => {
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('dragstart', preventDefault);
      document.removeEventListener('selectstart', preventDefault);
      document.removeEventListener('copy', preventDefault);
      document.removeEventListener('cut', preventDefault);
      document.removeEventListener('paste', preventDefault);
    };
  }, []);

  // Thêm handler cho keydown để ngăn chặn các phím tắt copy/paste
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        // Ctrl + C hoặc Command + C
        (e.ctrlKey || e.metaKey) && e.keyCode === 67 ||
        // Ctrl + V hoặc Command + V
        (e.ctrlKey || e.metaKey) && e.keyCode === 86 ||
        // Ctrl + X hoặc Command + X
        (e.ctrlKey || e.metaKey) && e.keyCode === 88 ||
        // Ctrl + A hoặc Command + A
        (e.ctrlKey || e.metaKey) && e.keyCode === 65
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="app-container"
      // Thêm các handlers trực tiếp vào container chính
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onPaste={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className={`menu-overlay ${menuVisible ? 'visible' : ''}`}>
        <button 
          className="menu-toggle"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          {menuVisible ? '✕' : '☰'}
        </button>
        
        {menuVisible && (
          <nav className="menu-content">
            <h1 className="menu-title">Trần Chí Bảo<br />21080741</h1>
            {Object.entries(screens).map(([category, items]) => (
              <div key={category} className="menu-category">
                <h2>{category}</h2>
                <div className="menu-items">
                  {Object.entries(items).map(([key, title]) => (
                    <button
                      key={key}
                      className={`menu-item ${currentScreen === key ? 'active' : ''}`}
                      onClick={() => setCurrentScreen(key)}
                    >
                      <span className="menu-item-number">{key}</span>
                      <span className="menu-item-title">{title}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        )}
      </div>

      <main className={`content ${!menuVisible ? 'full-width' : ''}`}>
        {(() => {
          switch(currentScreen) {
            case '1a': return <Screen1a />
            case '1b': return <Screen1b />
            case '1c': return <Screen1c />
            case '2a': return <Screen2a />
            case '2b': return <Screen2b />
            case '2c': return <Screen2c />
            case '3a': return <Screen3a />
            case '3b': return <Screen3b />
            default: return <Screen1a />
          }
        })()}
      </main>
    </div>
  )
}

export default App
