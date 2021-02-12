import React from 'react';
import { Link } from 'react-router-dom';
// import {useSelector, useDispatch} from 'react-redux';

import {StylesContainer } from '../styled-components/styles';

export default function StylesList({ styles }) {
	// const styles = useSelector(state => state.styles);
	// const dispatch = useDispatch()
	
	return (
		<div>
			<h1>Styles list</h1>
			<StylesContainer>
				{styles.map(style => (
					<Link to={`/styles/${style}`} key={style}>
						🎧 {style}
					</Link>
				))}
			</StylesContainer>
		</div>
	);
}
