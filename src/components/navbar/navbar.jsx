import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>MyTodo</div>
            <div className={styles.hamburgerMenu} onClick={toggleMenu}>
                <span className={isOpen ? styles.open : ''}></span>
                <span className={isOpen ? styles.open : ''}></span>
                <span className={isOpen ? styles.open : ''}></span>
            </div>
            <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                <li className={styles.navItem}><a href="">Home</a></li>
                <li className={styles.navItem}><a href="">About</a></li>
                <li className={styles.navItem}><a href="/signup">Signup</a></li>
                <li className={styles.navItem}><a href="/login">Login</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
