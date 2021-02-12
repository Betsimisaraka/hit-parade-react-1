import React from 'react';
import {FormStyles} from '../styled-components/styles';
import {setAddSong, setTitle, setArtist, setStyle, setPrice, setLyrics} from '../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function AddSong() {
	const dispatch = useDispatch();
	const styles = useSelector(state => state.styles)
	const title = useSelector(state => state.title)
	const artist = useSelector(state => state.artist)
	const price = useSelector(state => state.price)
	const style = useSelector(state => state.style)
	const lyrics = useSelector(state => state.lyrics)

	function handleSubmit(e) {
		e.preventDefault();
		const newSong = {
			id: Date.now(),
			title,
			artist,
			price,
			style,
			lyrics,
			upvotes: 0,
			downvotes: 0,
			isFavorited: false,
		};
	 	dispatch(setAddSong(newSong));
		// // reset the form... TODO: find a more elegant way.
		// setTitle('');
		// setArtist('');
		// setPrice(0);
		// setStyle('');
		// setLyrics('');
	}

	return (
		<div>
			<h1>🌚 Add a new song</h1>
			<FormStyles onSubmit={handleSubmit}>
				<input
					placeholder="Title"
					required
					value={title}
					onChange={e => dispatch(setTitle(e.currentTarget.value))}
				/>
				<input
					placeholder="Artist"
					required
					value={artist}
					onChange={e => dispatch(setArtist(e.currentTarget.value))}
				/>
				<input
					placeholder="Price"
					required
					value={price}
					onChange={e => dispatch(setPrice(e.currentTarget.value))}
				/>
				<select required value={style} onChange={e => dispatch(setStyle(e.currentTarget.value))}>
					{/* generate the styles from the context style array */}
					{styles.map(style => (
						<option key={style} value={style}>
							{style}
						</option>
					))}
				</select>
				<textarea
					required
					placeholder="Lyrics"
					value={lyrics}
					onChange={e => dispatch(setLyrics(e.currentTarget.value))}
				/>
				<button>Add</button>
			</FormStyles>
		</div>
	);
}
