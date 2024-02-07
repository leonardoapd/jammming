import styles from './Track.module.css';

function Track({ track, onSelect }) {
	const { id, name, album, artist } = track;

    const handleClick = () => {
        onSelect(track);
    };

	return (
		<div className={styles.app_track__container + ' nes-container is-rounded'}>
			<div className={styles.app_track__info}>
				<h3>{name}</h3>
				<p>
					{artist} | {album}
				</p>
			</div>
			<button className='nes-btn is-success' onClick={handleClick}>Add</button>
		</div>
	);
}

export default Track;