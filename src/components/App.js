import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import fetchVideos from '../utils/fetchVideos';
import Header from './Header';
import Video from './Video';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }

  componentDidMount() {
    this.videoSearch('tumo center for creative technologies');
  }

  videoSearch(term) {
    fetchVideos({ key: API_KEY, term: term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <Fragment>
        <Header />
        <div className="container">
          <SearchBar onSearchTermChange={videoSearch} />
          <Video video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
