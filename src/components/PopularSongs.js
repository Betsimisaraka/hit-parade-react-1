import React, { useEffect } from 'react';
import SongItem from './SongItem';
import {SongsContainer} from '../styled-components/styles';
import { useSelector } from 'react-redux';

export default function PopularSongs() {
	const songs = useSelector(state => state.songs)

	function sortSongsByPopularity(songA, songB) {
		const ratioA = songA.upvotes - songA.downvotes;
		const ratioB = songB.upvotes - songB.downvotes;
		return ratioB - ratioA;
	}

	function showSongsList() {
		if (!songs) return;
		const songsList = songs
			.sort(sortSongsByPopularity)
			.map(song => <SongItem key={song.id} song={song}></SongItem>);
		return songsList;
	}

	return (
		<div>
			<h1>Popular Songs</h1>
			<SongsContainer>{showSongsList()}</SongsContainer>
		</div>
	);
}
