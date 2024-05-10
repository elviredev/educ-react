import {useRef} from "react";
import './VideoPlayer.css'
import video from '../../assets/images/college-video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    // Fermer la video au clic sur la page
    const playerRef = useRef(null);

    const closePlayer = (e) => {
        if (e.target === playerRef.current) {
            setPlayState(false)
        }
    }

    return (
        <div
            className={`video-player ${playState ? 'show-video' : 'hide-video'}`}
            ref={playerRef}
            onClick={closePlayer}
        >
            <video className="show-video" src={video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
