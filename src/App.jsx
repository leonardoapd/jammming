import { useState } from 'react';
import { Navbar, SearchBar, SearchResults, Playlist } from './components';
// import songsData from './assets/data/songs.json';
import Spotify from './components/util/Spotify';
import './App.css';

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [playlist, setPlaylist] = useState([]);
	const [playlistName, setPlaylistName] = useState('New Playlist');

	/* 
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
	*/

	const handleSearch = (term) => {
		/* 
		const results = filterSongs(term);
		if (!term) return setSearchResults([]);
	 	setSearchResults(results);
	 	*/
		Spotify.search(term).then(setSearchResults);
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

	const handlePlaylistNameChange = (name) => {
		setPlaylistName(name);
	};

	const handlePlaylistSubmit = (name, tracks) => {
		if (!name || !tracks.length) {
			return;
		}
		const trackUris = tracks.map((track) => track.uri);
		Spotify.savePlaylist(name, trackUris)
			.then(() => {
				setPlaylistName('New Playlist');
				setPlaylist([]);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<Navbar />
			<SearchBar onSearch={handleSearch} />
			<main className='main-container'>
				<SearchResults results={searchResults} onAdd={handleAdding} />
				<Playlist
					playlist={playlist}
					playlistName={playlistName}
					onRemove={handleRemove}
					onSubmit={handlePlaylistSubmit}
					onNameChange={handlePlaylistNameChange}
				/>
			</main>
		</>
	);
}

export default App;
