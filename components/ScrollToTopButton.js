"use client";

import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
      setScrollProgress(progress);
      
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  const baseOpacity = 0.7;
  const currentOpacity = baseOpacity + (scrollProgress * 0.3);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#10b981',
        color: 'white',
        border: 'none',
        fontSize: '24px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        opacity: currentOpacity,
        zIndex: 9999
      }}
      onMouseOver={(e) => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseOut={(e) => {
        e.target.style.opacity = currentOpacity.toString();
        e.target.style.transform = 'scale(1)';
      }}
      aria-label="↑"
    >
      ↑
    </button>
  );
}