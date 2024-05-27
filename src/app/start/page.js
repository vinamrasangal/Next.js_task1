"use client"
import React from 'react';
import Link from 'next/link';
import styles from './start.module.css';
import {useRouter} from 'next/navigation';

const Start=()=>{
    const router=useRouter();
    const handleBackClick = () => {
        router.push("/login");
    };
    const handleNextClick = () => {
        router.push("/interest");
    };

    return(
        <div >
            <img src="/images/preferredName.png"  className={styles.preferredName} />

            <div className={styles.FN} >
                <input type="text" placeholder="First Name" className={styles.FN_input} />
            </div>
            <div className={styles.LN} >
                <input type="text" placeholder="Last Name" className={styles.LN_input} />
            </div>
            <div className={styles.title} >
                <input type="text" placeholder="Your title" className={styles.title_input} />
            </div>

            <div>
              <button className={styles.button} onClick={handleBackClick}>
                    <span className={styles.buttontext}>Back</span>
              </button>
              <button className={styles.Next} onClick={handleNextClick}>
                    <span className={styles.Nexttext}>Next</span>
              </button>
            </div>

        </div>
    )
}

export default Start;