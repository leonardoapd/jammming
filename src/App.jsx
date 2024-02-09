import { useState } from 'react';
import { Navbar, SearchBar, SearchResults, Playlist, Dialog } from './components';
// import songsData from './assets/data/songs.json';
import Spotify from './util/Spotify';
import './App.css';

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [playlist, setPlaylist] = useState([]);
	const [playlistName, setPlaylistName] = useState('New Playlist');
	const [dialog, setDialog] = useState({ title: '', message: '', open: false });

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
		const dialog = document.getElementById('dialog-default');
		
		if (name === '') {
			setDialog({
				title: 'Error',
				message: 'Please enter a name.',
				open: true,
			});
			dialog.showModal();
			return;
		}
		if (!tracks.length) {
			setDialog({
				title: 'Error',
				message: 'Please add tracks to the playlist.',
				open: true,
			});
			dialog.showModal();
			return;
		}
		const trackUris = tracks.map((track) => track.uri);
		Spotify.savePlaylist(name, trackUris)
			.then(() => {
				setPlaylistName('New Playlist');
				setPlaylist([]);
				setDialog({
					title: 'Success',
					message: 'Playlist saved successfully.',
					open: true,
				});
				dialog.showModal();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<Navbar />
			<h3 style={{ textAlign: 'center' }}>
				With Jammming you can add songs to your playlist and save it to Spotify
			</h3>
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
			<Dialog {...dialog} />
		</>
	);
}

export default App;
