import React, { useEffect, useState } from 'react';

function TypingEffect({ onComplete }) {
  const [text, setText] = useState('');

  useEffect(() => {
    const messages = [
      "잠시만 기다려주세요..."

    ];
    let currentIndex = 0;
    let currentChar = 0;

    const interval = setInterval(() => {
      if (currentIndex === messages.length) {
        clearInterval(interval);
        onComplete();
        return;
      }

      if (currentChar <= messages[currentIndex].length) {
        setText(messages[currentIndex].slice(0, currentChar));
        currentChar++;
      } else {
        currentIndex++;
        currentChar = 0;
        setTimeout(() => {}, 1000);
      }
    }, 105);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-text">
      <p>{text}<span className="blink">_</span></p>
    </div>
  );
}

export default TypingEffect;