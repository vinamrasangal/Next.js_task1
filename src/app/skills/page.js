"use client"
import React, { useState } from 'react';
import styles from './skills.module.css'; // Import your CSS module
import { useRouter } from 'next/navigation';

const Skills = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [showToolTip, setShowToolTip] = useState(false);

    const handleBackClick = () => {
        router.push("/interest");
    };

    const handleNextClick = () => {
        router.push("/login");
    };

    const handleInputChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        // Check if the search term contains "user" to show tool tip
        if (value.includes('user')) {
            setShowToolTip(true);
        } else {
            setShowToolTip(false);
        }
    };

    return (
        <div>
            <img src="/images/skills.png" alt="Logo" className={styles.interestlogo} />

            <div className={styles.search}>
                <h3>Type to search for your topics</h3>
            </div>

            <div className={styles.searchBox}>
                <img src="find.svg" alt="Search Icon" className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search topics..."
                    className={styles.inputField}
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>

            {/* Conditional rendering of tool tip */}
            {showToolTip && (
                <div className={styles.rectangle}>
                    

                    <div className={styles.item}>
                        <img src="check.svg" alt="Icon 1" />
                          User Experience
                    </div>
                    <div className={styles.item}>
                        <img src="check.svg" alt="Icon 2" />
                        User Experience Design
                    </div>
                    <div className={styles.item}>
                        <img src="check.svg" alt="Icon 3" />
                        User Interface
                    </div>
                    <div className={styles.item}>
                        <img src="check.svg" alt="Icon 4" />
                        User research
                    </div>
                    <div className={styles.item}>
                        <img src="check.svg" alt="Icon 5" />
                        UXR
                    </div>
                    <div className={styles.item}>
                        <img src="check.svg" alt="Icon 6" />
                        UI/UX design
                    </div>
                </div>
            )}

            <div className={styles.buttonContainer}>
                <div className={styles.buttonRow}>
                    <div className={styles.button}>Ecommerce</div>
                    <div className={styles.button}>Health Care</div>
                    <div className={styles.button}>Real Estate</div>
                    <div className={styles.button}>Bookkeeping</div>
                </div>
                <div className={styles.buttonRow}>
                    <div className={styles.button}>Food</div>
                    <div className={styles.button}>Design</div>
                    <div className={styles.button}>Fin tech</div>
                    <div className={styles.button}>Construction</div>
                </div>
                <div className={styles.buttonRow}>
                    <div className={styles.button}>Service</div>
                    <div className={styles.button}>Delivery</div>
                    <div className={styles.button}>Transportation</div>
                    <div className={styles.button}>Fitness</div>
                </div>
            </div>
            <div>
                <button className={styles.back} onClick={handleBackClick}>
                    <span className={styles.backtext}>Back</span>
                </button>
                <button className={styles.Next} onClick={handleNextClick}>
                    <span className={styles.Nexttext}>Next</span>
                </button>
            </div>
        </div>
    );
}

export default Skills;
