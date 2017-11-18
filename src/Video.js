import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Video extends Component {
  render() {
    return (
      <section id="header_promo">
        <div className="header_video">
            <div className="header_info">
                <h1 >Sprint Management</h1>
                <p className="header-description">You can create your plan for Sprint Management</p>
                <a href="#" className="video_button">Add Questions</a>
                <a href="#" className="video_button">View Progress</a>
            </div>
        </div>
        <video autoPlay="true" loop="loop" muted="" className="teaser-video">
            <source src="./video/paris.mp4" type="video/mp4" />
            <source src="./video/paris.ogv" type="video/ogg" />
        </video>
    </section>
    );
  }
}

export default Video;