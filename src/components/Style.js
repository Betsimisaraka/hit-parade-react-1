import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {SongPreviewContainer, SongPreview} from '../styled-components/styles';
import { useSelector } from 'react-redux';

export default function Style() {
	const songs = useSelector(state => state.songs);

	const { styleName } = useParams();

	function createSongTemplate(song) {
		return (
			<Link to={`/song/${song.id}`} key={song.id}>
				<SongPreview>
					<h3>{song.title}</h3>
					<h4>{song.artist}</h4>
				</SongPreview>
			</Link>
		);
	}

	function showSongsFilteredByStyle() {
		const filteredSongs = songs
			.filter(song => song.style === styleName)
			.map(createSongTemplate);
		if (filteredSongs.length === 0) {
			return <p>No results.</p>;
		}
		return filteredSongs;
	}

	return (
		<div>
			<h1>Style</h1>
			<SongPreviewContainer>{showSongsFilteredByStyle()}</SongPreviewContainer>
		</div>
	);
}
