import { Track } from '../';
import styles from './Tracklist.module.css';

function Tracklist({ tracks }) {
	if (!tracks) return <p>No tracks found</p>;

    const handleAdding = (track) => {
        console.log('Add track:', track.name);
    };

	return (
		<ul className={styles.app_tracklist}>
			{tracks.map((track, index) => (
				<li key={index}>
					<Track track={track} onSelect={handleAdding}/>
				</li>
			))}
		</ul>
	);
}

export default Tracklist;
