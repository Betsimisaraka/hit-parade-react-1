import { connect } from 'react-redux';
import Style from '../components/Style';
import {setSongs} from '../actions';

export default connect((state) => ({songs: state.songs}), { setSongs })(Style);