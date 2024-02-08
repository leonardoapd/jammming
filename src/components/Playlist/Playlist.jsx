import { useState, useEffect } from 'react';
import { Tracklist } from '../';
import styles from './Playlist.module.css';

function Playlist({ playlist, onRemove, onSubmit }) {
	const [playlistName, setPlaylistName] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;
		setPlaylistName(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!playlistName) return;
		onSubmit(playlistName, playlist);
	};

	const handleRemove = (track) => {
		onRemove(track);
	};

	return (
		<aside className={styles.aside}>
			<form onSubmit={handleSubmit}>
				<label htmlFor='playlist' className={styles.app_label}>
					Playlist
				</label>
				<input
					type='text'
					id='playlist'
					placeholder='Playlist name...'
					className='nes-input'
					value={playlistName}
					onChange={handleChange}
				/>
				<Tracklist tracks={playlist} onRemove={handleRemove} isRemoval isPlaylist={true} />
				<button className='nes-btn is-success fit-parent' type='submit'>
					Save to Spotify
				</button>
			</form>
		</aside>
	);
}

export default Playlist;
