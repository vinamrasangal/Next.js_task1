"use client"
import React, { useState } from 'react';
import styles from './interest.module.css'; 
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Interest = () => {
    const router = useRouter();

    const [selectedButtons, setSelectedButtons] = useState([]);

  
    const toggleButton = (buttonText) => {
        if (selectedButtons.includes(buttonText)) {
            setSelectedButtons(selectedButtons.filter(btn => btn !== buttonText));
        } else {
            setSelectedButtons([...selectedButtons, buttonText]);
        }
    };

   
    const handleBackClick = () => {
        router.push("/start");
    };

   
    const handleNextClick = () => {
        if (selectedButtons.length > 0) {
            router.push("/skills");
        } else {
            toast.error("Please select at least one interest before proceeding.", {
                position: "top-center",
                autoClose: 3000, 
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div>
            <img src="/images/interest.png" alt="Logo" className={styles.interestlogo} />

            <div className={styles.search}>
                <h3>Type to search for your topics</h3>
            </div>

            <div className={styles.searchBox}>
                <img src="find.svg" alt="Search Icon" className={styles.searchIcon} />
                <input type="text" placeholder="Search topics..." className={styles.inputField} />
            </div>

            <div className={styles.buttonContainer}>
                <div className={styles.buttonRow}>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Discussions') && styles.selected}`}
                        onClick={() => toggleButton('Discussions')}
                    >
                        Discussions
                    </div>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Network') && styles.selected}`}
                        onClick={() => toggleButton('Network')}
                    >
                        Network
                    </div>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Resources') && styles.selected}`}
                        onClick={() => toggleButton('Resources')}
                    >
                        Resources
                    </div>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Resume') && styles.selected}`}
                        onClick={() => toggleButton('Resume')}
                    >
                        Resume
                    </div>
                </div>
                <div className={styles.buttonRow}>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Startups') && styles.selected}`}
                        onClick={() => toggleButton('Startups')}
                    >
                        Startups
                    </div>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Financing') && styles.selected}`}
                        onClick={() => toggleButton('Financing')}
                    >
                        Financing
                    </div>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Experience') && styles.selected}`}
                        onClick={() => toggleButton('Experience')}
                    >
                        Experience
                    </div>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Tips & Tricks') && styles.selected}`}
                        onClick={() => toggleButton('Tips & Tricks')}
                    >
                        Tips & Tricks
                    </div>
                </div>
                <div className={styles.buttonRow}>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Marketing') && styles.selected}`}
                        onClick={() => toggleButton('Marketing')}
                    >
                        Marketing
                    </div>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Investing') && styles.selected}`}
                        onClick={() => toggleButton('Investing')}
                    >
                        Investing
                    </div>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('Connection') && styles.selected}`}
                        onClick={() => toggleButton('Connection')}
                    >
                        Connection
                    </div>
                    <div
                        className={`${styles.button} ${selectedButtons.includes('All') && styles.selected}`}
                        onClick={() => toggleButton('All')}
                    >
                        All
                    </div>
                </div>
            </div>
            <ToastContainer /> {/* Toast container */}
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
};

export default Interest;
