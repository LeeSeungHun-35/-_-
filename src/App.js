import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

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

  return (
    <Router>
      <div className="App">
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