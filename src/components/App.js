import React from 'react';
//import {selectSong} from '../actions'; /index.js is automatically imported because of webpack. Short cut.
import SongList from './SongList';
import { connect } from 'react-redux';

const App = () => {
    return (
        <div>
            <SongList/>
        </div>
    );
};

export default connect()(App);
