import React from 'react';
import VideoPlayer from 'react-video-js-player';

const VideoJs=()=>{   
    const videoSrc='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
    const poster="https://bitmovin.com/wp-content/uploads/2016/06/sintel-poster.jpg"
    return (
      <div className="App">
        <div className="video_banner">
          <div className="banner__content">
            <h3 className="item__title">SinTel</h3>
            <p>
              Release date: <span>2010-11-27</span>
            </p>
            <div>
              <i className="fa fa-thumbs-up" /> <span>7.2</span>
            </div>
          </div>
        </div>
        <VideoPlayer
          src={videoSrc}
          poster={poster}
          width="720"
          height="420"
          playbackRates={[0.5, 1, 2, 4, 16]}
        />
      </div>
    );
}
export default VideoJs;
