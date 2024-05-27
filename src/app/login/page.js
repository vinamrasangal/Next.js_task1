"use client"
import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import styles from './login.module.css';

const Login = () => {
    const router=useRouter();
    const handleStartClick = () => {
        router.push("/start");
    };

    return (
        <div>
            <img src="/images/welcome.png" alt="Logo" className={styles.welcomeTask} />

            <div className={styles.createAcc}>Create Account</div>

            <div className={styles.find}>
                Find and connect for your new opportunity
            </div>

            <div className={styles.email}>
                <input type="email" placeholder="Email" className={styles.inputField} />
            </div>

            <div className={styles.password}>
                <input type="password" placeholder="Password" className={styles.inputField} />
            </div>

            <div className={styles.buttonContainer}>
                {/* Add onClick event handler to the Start button */}
                <button className={styles.button} onClick={handleStartClick}>
                    <span className={styles.buttonText}>Start</span>
                </button>
            </div>

            <div className={styles.loginContainer}>
                <div className={styles.already}>Already have an account?</div>
                <div className={styles.LOGIN}>Log in</div>
            </div>
            <div>
                <div className={styles.Fline}></div>
                <div className={styles.or}>or</div>
                <div className={styles.Lline}></div>
            </div>
            <div className={styles.loginicons}>
            <div className={styles.googleLogin}>
                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.googleIcon}>
                        <circle cx="31.5" cy="31.5" r="31.5" fill="#F7F7F7" />
                        <g clip-path="url(#clip0)">
                            <path d="M31.4998 29.0454V34.2736H38.7652C38.4462 35.955 37.4888 37.3787 36.0529 38.3359L40.4342 41.7355C42.9869 39.3792 44.4597 35.9183 44.4597 31.8069C44.4597 30.8497 44.3738 29.9291 44.2142 29.0456L31.4998 29.0454Z" fill="#4285F4" />
                            <path d="M23.9339 34.0696L22.9458 34.826L19.448 37.5505C21.6694 41.9564 26.2222 45.0001 31.4994 45.0001C35.1443 45.0001 38.2002 43.7973 40.4339 41.7356L36.0526 38.336C34.8498 39.146 33.3157 39.6369 31.4994 39.6369C27.9895 39.6369 25.0073 37.2683 23.9395 34.0774L23.9339 34.0696Z" fill="#34A853" />
                            <path d="M19.4481 25.4496C18.5277 27.2659 18 29.3154 18 31.5C18 33.6845 18.5277 35.734 19.4481 37.5503C19.4481 37.5625 23.94 34.0649 23.94 34.0649C23.67 33.2549 23.5104 32.3958 23.5104 31.4998C23.5104 30.6038 23.67 29.7448 23.94 28.9348L19.4481 25.4496Z" fill="#FBBC05" />
                            <path d="M31.4997 23.3755C33.4879 23.3755 35.2552 24.0627 36.6665 25.3882L40.5324 21.5223C38.1883 19.3378 35.1448 18 31.4997 18C26.2225 18 21.6694 21.0314 19.448 25.4496L23.9398 28.935C25.0074 25.7441 27.9897 23.3755 31.4997 23.3755Z" fill="#EA4335" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="27" height="27" fill="white" transform="translate(18 18)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={styles.Linkedin}>
                    <svg width="63" height="65" viewBox="0 0 63 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="31.5" cy="32.1705" rx="31.5" ry="32.0318" fill="#F7F7F7" />
                        <g clip-path="url(#clip0_6_908)">
                            <path d="M43.0069 18H19.9931C19.4645 18 18.9576 18.21 18.5838 18.5838C18.21 18.9576 18 19.4645 18 19.9931V43.0069C18 43.5355 18.21 44.0424 18.5838 44.4162C18.9576 44.79 19.4645 45 19.9931 45H43.0069C43.5355 45 44.0424 44.79 44.4162 44.4162C44.79 44.0424 45 43.5355 45 43.0069V19.9931C45 19.4645 44.79 18.9576 44.4162 18.5838C44.0424 18.21 43.5355 18 43.0069 18ZM26.0475 41.0006H21.9881V28.1063H26.0475V41.0006ZM24.015 26.3194C23.5545 26.3168 23.1052 26.1778 22.7236 25.9201C22.342 25.6624 22.0453 25.2973 21.871 24.8712C21.6967 24.445 21.6525 23.9767 21.744 23.5254C21.8356 23.0741 22.0588 22.6601 22.3854 22.3355C22.7121 22.0109 23.1275 21.7904 23.5794 21.7018C24.0313 21.6131 24.4993 21.6603 24.9243 21.8374C25.3494 22.0144 25.7125 22.3134 25.9678 22.6967C26.2231 23.0799 26.3591 23.5302 26.3588 23.9906C26.3631 24.2989 26.3053 24.6049 26.1889 24.8904C26.0725 25.1759 25.8997 25.435 25.681 25.6523C25.4623 25.8696 25.2021 26.0407 24.9159 26.1553C24.6296 26.2699 24.3233 26.3257 24.015 26.3194ZM41.01 41.0119H36.9525V33.9675C36.9525 31.89 36.0694 31.2488 34.9294 31.2488C33.7256 31.2488 32.5444 32.1563 32.5444 34.02V41.0119H28.485V28.1156H32.3888V29.9025H32.4413C32.8331 29.1094 34.2056 27.7538 36.3 27.7538C38.565 27.7538 41.0119 29.0981 41.0119 33.0356L41.01 41.0119Z" fill="#0A66C2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_6_908">
                                <rect width="27" height="27" fill="white" transform="translate(18 18)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className={styles.Apple}>
                    <svg width="63" height="65" viewBox="0 0 63 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="31.5" cy="32.1705" rx="31.5" ry="32.0318" fill="#F7F7F7" />
                        <g clip-path="url(#clip0_6_904)">
                            <path d="M42.516 38.0414C42.1076 38.9848 41.6243 39.8531 41.0643 40.6514C40.301 41.7397 39.676 42.493 39.1944 42.9113C38.4478 43.5979 37.6478 43.9496 36.7911 43.9696C36.1762 43.9696 35.4345 43.7946 34.5712 43.4396C33.7051 43.0863 32.9091 42.9113 32.1813 42.9113C31.418 42.9113 30.5993 43.0863 29.7237 43.4396C28.8467 43.7946 28.1402 43.9796 27.6001 43.9979C26.7786 44.0329 25.9598 43.6713 25.1425 42.9113C24.6209 42.4563 23.9684 41.6763 23.1867 40.5714C22.3481 39.3914 21.6586 38.0231 21.1185 36.4632C20.54 34.7782 20.25 33.1466 20.25 31.567C20.25 29.7575 20.641 28.1969 21.4241 26.8891C22.0396 25.8386 22.8584 25.01 23.8832 24.4017C24.908 23.7934 26.0153 23.4834 27.2078 23.4636C27.8603 23.4636 28.7159 23.6654 29.7792 24.062C30.8395 24.46 31.5203 24.6619 31.8188 24.6619C32.042 24.6619 32.7983 24.4259 34.0804 23.9554C35.2929 23.5191 36.3162 23.3384 37.1545 23.4096C39.4261 23.5929 41.1327 24.4884 42.2676 26.1016C40.236 27.3326 39.2311 29.0567 39.2511 31.2685C39.2694 32.9913 39.8944 34.4249 41.1227 35.5632C41.6793 36.0915 42.301 36.4998 42.9926 36.7898C42.8426 37.2248 42.6843 37.6415 42.516 38.0414ZM37.3061 17.5404C37.3061 18.8907 36.8128 20.1515 35.8295 21.3184C34.6429 22.7057 33.2076 23.5074 31.6511 23.3809C31.6313 23.2189 31.6198 23.0484 31.6198 22.8692C31.6198 21.5729 32.1841 20.1857 33.1863 19.0514C33.6866 18.477 34.3229 17.9995 35.0945 17.6186C35.8645 17.2433 36.5928 17.0358 37.2778 17.0002C37.2978 17.1808 37.3061 17.3613 37.3061 17.5404V17.5404Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_6_904">
                                <rect width="27" height="27" fill="white" transform="translate(18 17)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default Login;
