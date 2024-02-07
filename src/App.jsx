// import { useState } from 'react';
import { SearchBar, Track } from './components';
import songsData from './assets/data/songs.json';
import './App.css';

function App() {
	console.log(songsData);

	return (
		<>
			<SearchBar />
			<div className='app_tracks'>
				{songsData.map((song, index) => {
					const { name, album, artist } = song;
					return <Track key={index} track={{ name, album, artist }} />;
				})}
			</div>
		</>
	);
}

export default App;
