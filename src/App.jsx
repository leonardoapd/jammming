import { useState } from 'react';
import { SearchBar, SearchResults, Playlist } from './components';
import songsData from './assets/data/songs.json';
import './App.css';

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [playlist, setPlaylist] = useState([]);

	const filterSongs = (term) => {
		return songsData.filter(({ name, artist, album }) => {
			const lowerCaseTerm = term.toLowerCase();
			return (
				name.toLowerCase().includes(lowerCaseTerm) ||
				artist.toLowerCase().includes(lowerCaseTerm) ||
				album.toLowerCase().includes(lowerCaseTerm)
			);
		});
	};

	const handleSearch = (term) => {
		const results = filterSongs(term);
		if (!term) return setSearchResults([]);
		setSearchResults(results);
	};

	const handleAdding = (track) => {
		if (playlist.find((t) => t.id === track.id)) return;
		const newPlaylist = [...playlist, track];
		setPlaylist(newPlaylist);
	};

	const handleRemove = (track) => {
		const newPlaylist = playlist.filter((t) => t.id !== track.id);
		setPlaylist(newPlaylist);
	};

	const handlePlaylistSubmit = (name, tracks) => {
		console.log('Playlist name:', name);
		console.log('Playlist tracks:', tracks);
	};

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			<main className='main-container'>
				<SearchResults results={searchResults} onAdd={handleAdding} />
				<Playlist playlist={playlist} onRemove={handleRemove} onSubmit={handlePlaylistSubmit}/>
			</main>
		</>
	);
}

export default App;
