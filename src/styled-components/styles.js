import styled from 'styled-components';

export const SongsContainer = styled.ul`
	display: grid;
	grid-template-columns: 500px;
	gap: 20px;
	padding: 0;
	margin: 0;
`;

export const FormStyles = styled.form`
	display: grid;
	grid-template-columns: 300px;
	gap: 10px;
	input,
	select,
	textarea {
		height: 30px;
		background: #bae8e8;
		border: none;
		padding: 0 1rem;
		border-radius: 5px;
	}
	input::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: #272343;
		opacity: 1; /* Firefox */
	}
`;

export const SongPreviewContainer = styled.div`
	display: grid;
	grid-template-columns: 500px;
	gap: 20px;
`;

export const SongPreview = styled.div`
	background: #272343;
	padding: 2rem;
	color: white;
	h3 {
		margin: 0;
		font-size: 1.4rem;
	}
`;

export const StylesContainer = styled.div`
	display: grid;
	gap: 20px;
	a {
		text-decoration: none;
		color: #272343;
		font-size: 2rem;
	}
	a:hover {
		color: #ffd803;
	}
`;

export const SongItemStyle = styled.div`
	display: flex;
	gap: 20px;
	color: white;
	background: #272343;
	padding: 2rem;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	.song-title {
		font-size: 1.8rem;
	}
	svg {
		font-size: 1.5rem;
		cursor: pointer;
	}
	.heart-icon {
		color: #ffd803;
	}
	.votes,
	a {
		color: #bae8e8;
	}
	svg:hover {
		color: #ffd803;
	}
`;
export const CartItemsContainer = styled.div`
	display: grid;
	gap: 20px;
`;

export const CartItemStyles = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem;
	background: #272343;
	color: white;
	.price {
		color: #ffd803;
	}
	svg {
		color: #bae8e8;
		cursor: pointer;
	}
	svg:hover {
		color: #ffd803;
	}
`;