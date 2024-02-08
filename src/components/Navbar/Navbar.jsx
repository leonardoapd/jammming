import React from 'react';
import styles from './Navbar.module.css';
import conserve from '../../assets/images/conserve.png';

function Navbar() {
	return (
		<>
			<nav className={styles.navbar}>
				{/* TODO: Set an Icon or Logo */}
				<img src={conserve} alt='Jammming Logo' width={32} />
				<h1 style={{ marginBottom: 0 }}>Jammming</h1>
			</nav>
		</>
	);
}

export default Navbar;
