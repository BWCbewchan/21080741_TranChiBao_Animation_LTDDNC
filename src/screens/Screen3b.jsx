import { useState, useRef } from 'react';

function Screen3b() {
  const images = [
    'https://dulichsaigon.edu.vn/wp-content/uploads/2024/01/hoi-an-thanh-pho-du-lich-o-viet-nam-thu-hut-nhieu-du-khach.jpg',
    'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1673946892/blog/uvjehfppsga5d6wyn8ca.webp',
    'https://images.vietnamtourism.gov.vn/vn/images/2019/CNMN/18.2._5_Dia_diem_me_hoac_cua_Viet_Nam_duoc_truyen_thong_quoc_te_vinh_danh_1.jpg',
    'https://dulichsaigon.edu.vn/wp-content/uploads/2024/01/thanh-pho-ho-chi-minh-diem-du-lich-nang-dong-va-sam-uat.jpg',
    'https://media.vneconomy.vn/w900/images/upload/2024/05/20/445066535-122098348880328806-4285829586151973481-n.jpg',
    'https://dulichsaigon.edu.vn/wp-content/uploads/2024/01/sapa-dia-diem-du-lich-noi-tieng-tai-viet-nam.jpg',
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1673946932/blog/fcuqprqkel2xbjqhrcnx.webp",
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1673946940/blog/hchg7nm6k3apish6tp5c.webp",
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1673946948/blog/fah0zizddrldwrnn7x9m.webp",
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1673946956/blog/hyrhe85slnlsn8vbdqpg.webp",
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1673946965/blog/jdmh1urkhtof8bmqejep.webp",
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1673946973/blog/qegokwrri4rmuacop1hc.webp",
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1673946993/blog/wasri6j9lsh0cyem5dfn.webp",
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1673947013/blog/a8fpixp7snz9wxt5zzfe.webp",
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1673947023/blog/i8ychgitftkjqh1k7l5i.webp"
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const startX = useRef(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    startX.current = e.clientX - position;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newPosition = e.clientX - startX.current;
    setPosition(newPosition);

    if (containerRef.current) {
      const quarterWidth = containerRef.current.offsetWidth / 4;
      if (newPosition < -quarterWidth) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsDragging(false);
        setPosition(0);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setPosition(0);
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
    MozUserSelect: 'none',
    msUserSelect: 'none',
  };

  const imageContainerStyle = {
    width: '300px',
    height: '200px',
    position: 'absolute',
    cursor: isDragging ? 'grabbing' : 'grab',
    transition: isDragging ? 'none' : 'all 0.3s ease',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    transform: `translateX(${position}px)`,
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    WebkitUserDrag: 'none',
    WebkitTouchCallout: 'none',
    draggable: false,
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
    MozUserSelect: 'none',
    msUserSelect: 'none',
  };

  return (
    <div className="screen-container">
      <div className="screen-content">
        <div 
          ref={containerRef}
          style={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div
            style={{
              width: '80vh',
              height: '60vh',
              maxWidth: '800px',
              maxHeight: '600px',
              position: 'absolute',
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'all 0.3s ease',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
              transform: `translateX(${position}px)`,
            }}
            onMouseDown={handleMouseDown}
          >
            <img 
              src={images[currentImageIndex]} 
              alt={`Du lịch Việt Nam ${currentImageIndex + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
                userSelect: 'none',
                WebkitUserDrag: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen3b;