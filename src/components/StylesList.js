import React from 'react';
import { Link } from 'react-router-dom';

import {StylesContainer } from '../styled-components/styles';

export default function StylesList({ styles }) {
	
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
