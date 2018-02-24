import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => (
  <li onClick={() => onVideoSelect(video)} className="list-group-item">
    <div className="video-list-media">
      <div className="media-left">
        <img src={video.snippet.thumbnails.default.url} alt="video thumbnail" />
      </div>
      <div className="media-body">
        <div className="media-heading">
          <h6>{video.snippet.title}</h6>
        </div>
      </div>
    </div>
  </li>
);

export default VideoListItem;
