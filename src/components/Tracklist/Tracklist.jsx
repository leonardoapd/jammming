import { Track } from '../';
import styles from './Tracklist.module.css';

function Tracklist({ tracks, onAdd, onRemove, isRemoval = false, isPlaylist = false }) {
	if (!isPlaylist && !tracks.length) return <p style={{ color: 'red' }}>No tracks found</p>;

	const handleSelect = (track) => {
		!isRemoval ? onAdd(track) : onRemove(track);
	};

	return (
		<ul className={styles.app_tracklist}>
			{tracks.map((track, index) => (
				<li key={index}>
					<Track track={track} onSelect={handleSelect} isRemoval={isRemoval} />
				</li>
			))}
		</ul>
	);
}

export default Tracklist;
