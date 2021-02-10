import { connect } from 'react-redux';
import PopularSongs from '../components/PopularSongs';
import {setSongs} from '../actions';

export default connect((state) => ({songs: state.songs}), { setSongs })(PopularSongs);