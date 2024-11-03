import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';

// 컴포넌트 import
import Header from './header/Header';
import TypingEffect from './components/TypingEffect';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import Certification from './components/Certification';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // 모바일 접속 체크
    const isMobile = window.innerWidth <= 768;
    const hasShownAlert = sessionStorage.getItem('hasShownMobileAlert');

    if (isMobile && !hasShownAlert) {
      alert('모바일 접속 시 레이아웃이 깨질 수 있습니다.');
      sessionStorage.setItem('hasShownMobileAlert', 'true');
    }

    // 화면 크기 변경 감지
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 화면 크기에 따른 스타일 조정
  const getContentStyle = () => {
    if (windowSize.width <= 480) {
      return { padding: '10px', fontSize: '14px' };
    } else if (windowSize.width <= 768) {
      return { padding: '15px', fontSize: '16px' };
    }
    return { padding: '20px', fontSize: '18px' };
  };

  return (
    <Router>
      <div className="App" style={getContentStyle()}>
        {!isAuthenticated ? (
          <div className="terminal">
            <TypingEffect onComplete={() => setIsAuthenticated(true)} />
          </div>
        ) : (
          <>
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={
                  <div className="terminal">
                    <div className="content">
                      <Main1 />
                      <Main2 />
                      <Main3 />
                    </div>
                  </div>
                } />
                <Route path="/certification" element={<Certification />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;