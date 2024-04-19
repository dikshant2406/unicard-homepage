import React from "react";
import './BgVideo.css'

const BgVideo = () => {
    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            id="backgroundVideo"
            className="back-video"
        >
        <source
            src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
            type="video/mp4"
        />
        Your browser does not support HTML5 video.
    </video> 
    )
}

export default BgVideo ;



