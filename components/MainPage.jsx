import React from 'react';
import styles from '../pages/MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <div className={styles.companyName}>우진화성</div>
                <div className={styles.buttonGroup}>
          <button className={styles.searchBtn} aria-label="검색">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#fff" strokeWidth="2"/>
              <line x1="14.2" y1="14.2" x2="18" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className={styles.langBtn} aria-label="English">
            <div className={styles.flagBackground}></div>
          </button>
          <button className={styles.langBtnKorean} aria-label="한국어">
            <div className={styles.flagBackgroundKr}></div>
          </button>
          <button className={styles.menuBtn} aria-label="메뉴">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <line x1="3" y1="6" x2="21" y2="6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="12" x2="21" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="18" x2="21" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
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