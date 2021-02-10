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