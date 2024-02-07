import styles from './Track.module.css';

function Track({ track }) {
	const { name, album, artist } = track;

    const handleClick = () => {
        console.log('Add track:', name);
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