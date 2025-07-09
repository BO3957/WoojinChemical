import React from 'react';
import Head from 'next/head';
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <>
      <Head>
        <title>WJC 우진화성</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <div className="example">
        <div className="rectangle">
          <div className="company-name">우진화성</div>
          <button className="search-btn" aria-label="검색">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#fff" strokeWidth="2"/>
              <line x1="14.2" y1="14.2" x2="18" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="parallelogram">
          <div className="logo-container">
            <div className="wjc-text">
              <span className="w-letter">W</span>
              <span className="j-letter">J</span>
              <span className="c-letter">C</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage; 