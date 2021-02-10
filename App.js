import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Menu from './src/components/Menu';

import PopularSongs from './src/components/PopularSongs';
import StylesList from './src/components/StylesList';
import Style from './src/components/Style';
import Song from './src/components/Song';
import AddSong from './src/components/AddSong';
import Cart from './src/components/Cart';

// - / (PopularSongs.js)
// - /styles (StylesList.js)
// - /styles/:styleName (Style.js)
// - /song/:songId (Song.js)
// - /add (AddSong.js)
// - /cart (Cart.js)

export default function App() {
	return (
		<div>
			<Link to="/">
				<h1>Hit Parade</h1>
			</Link>
			<Menu />
			<Switch>
				<Route exact path="/">
					<PopularSongs />
				</Route>
				<Route exact path="/styles">
					<StylesList />
				</Route>
				<Route exact path="/styles/:styleName">
					<Style />
				</Route>
				<Route exact path="/song/:songId">
					<Song />
				</Route>
				<Route exact path="/add">
					<AddSong />
				</Route>
				<Route exact path="/cart">
					<Cart />
				</Route>
			</Switch>
		</div>
	);
}
