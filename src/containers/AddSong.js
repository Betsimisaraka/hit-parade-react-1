import { connect } from "react-redux";
import AddSong from "../components/AddSong";
import {setAddSong, setTitle, setArtist, setStyle, setPrice, setLyrics} from '../actions';

function mapStateToProps(state) {
    return {
        styles: state.styles,
        title: state.title,
        artist: state.artist,
        style: state.style,
        price: state.price,
        lyrics: state.lyrics
    }
}

const mapDispathToProps = {
    setAddSong,
    setTitle,
    setArtist,
    setStyle,
    setPrice,
    setLyrics,
}

export default connect(mapStateToProps, mapDispathToProps)(AddSong);