import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
	const [userInput, setUserInput] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;
		setUserInput(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!userInput) return;
        onSearch(userInput);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.app_form}>
				<div className='nes-field'>
					<label htmlFor='search' className={styles.app_label}>Search</label>
					<input
						type='text'
						placeholder='Search...'
						value={userInput}
						onChange={handleChange}
						className='nes-input'
					/>
				</div>
				<button type='submit' className='nes-btn is-primary'>
					Go
				</button>
			</form>
		</>
	);
}

export default SearchBar;
