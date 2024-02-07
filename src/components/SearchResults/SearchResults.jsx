import { Tracklist } from '../';

function SearchResults({ results }) {
	return (
		<section className='nes-container with-title'>
			<h3 className='title'>Results</h3>
			<Tracklist tracks={results} />
		</section>
	);
}

export default SearchResults;
