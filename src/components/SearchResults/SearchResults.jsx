import { Tracklist } from '../';

function SearchResults({ results, onAdd }) {
	const handleAdding = (track) => {
		onAdd(track);
	};
	return (
		<section className='nes-container with-title'>
			<h3 className='title'>Results</h3>
			<Tracklist tracks={results} onAdd={handleAdding} />
		</section>
	);
}

export default SearchResults;
