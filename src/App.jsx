// import { useState } from 'react';
import { SearchBar, SearchResults } from './components';
import songsData from './assets/data/songs.json';
import './App.css';

function App() {
	console.log(songsData);

	return (
		<>
			<SearchBar />
			<SearchResults results={songsData} />
		</>
	);
}

export default App;
