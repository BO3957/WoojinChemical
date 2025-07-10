import React from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <div className={styles.companyName}>우진화성</div>
        <button className={styles.searchBtn} aria-label="검색">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="7" stroke="#fff" strokeWidth="2"/>
            <line x1="14.2" y1="14.2" x2="18" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      <div className={styles.parallelogram}>
        <div className={styles.logoContainer}>
          <div className={styles.wjcText}>
            <span className={styles.wLetter}>W</span>
            <span className={styles.jLetter}>J</span>
            <span className={styles.cLetter}>C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;