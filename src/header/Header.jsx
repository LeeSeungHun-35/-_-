import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="terminal-prefix">
          root@LSH:~$
          <span className="blink">_</span>
        </div>
      </div>
      
      <nav className="header-nav">
        <Link to="/" className="nav-link">
          <span className="bracket">[</span>
          홈
          <span className="bracket">]</span>
        </Link>
        <Link to="/certification" className="nav-link">
          <span className="bracket">[</span>
          수료
          <span className="bracket">]</span>
        </Link>
        {/* Blog 링크를 a 태그로 변경 */}
        <a 
          href="https://shsecurity1.tistory.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link"
        >
          <span className="bracket">[</span>
          블로그
          <span className="bracket">]</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;