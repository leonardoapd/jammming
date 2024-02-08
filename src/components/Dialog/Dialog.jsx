import React from 'react';
import styles from './Dialog.module.css';

function Dialog({ title, message }) {
	return (
		<dialog className='nes-dialog is-rounded' id='dialog-default'>
			<form method='dialog'>
				<h3 className='title'>{title}</h3>
				<p>{message}</p>
				<menu className={styles.dialog_menu + ' dialog-menu'}>
					<button className='nes-btn is-error'>Close</button>
				</menu>
			</form>
		</dialog>
	);
}

export default Dialog;
