// import { useState } from 'react';
import { SearchBar, Tracklist } from './components';
import songsData from './assets/data/songs.json';
import './App.css';

function App() {
	console.log(songsData);

	return (
		<>
			<SearchBar />
			<div className='app_tracks'>
				<Tracklist tracks={songsData} />
			</div>
		</>
	);
}

export default App;
