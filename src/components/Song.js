import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { SongPreview } from '../styled-components/styles';
import { AiOutlineArrowLeft } from 'react-icons/Ai';
import { useSelector } from 'react-redux';

export default function Song() {
	const songs = useSelector(state => state.songs)

	const { songId } = useParams();
	const history = useHistory();

	const song = songs && songs.find(song => song.id == songId);

	return (
		<div>
			<h1>
				<AiOutlineArrowLeft onClick={() => history.goBack()} />
				{song.artist} - {song.title}
			</h1>
			<SongPreview>
				<h3>Lyrics</h3>
				{song.lyrics}
			</SongPreview>
		</div>
	);
}
