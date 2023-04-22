import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

function getTime(SECONDS) {
    var s = new Date(SECONDS * 1000).toISOString().substring(14, 19)
    return s
}

// TODO : Make this take song data as args and interactable

const Player = () => {
    const [volume, setVolume] = useState(50);
    const [position, setPosition] = useState(0);
    const duration = 244;
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const handlePositionChange = (event) => {
        setPosition(event.target.value);
    };
    return (
        <div className="player">
            <div className="player_info">
                <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="album cover" />
                <div className="player__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className='player_duration'>
                {getTime(position)}
                <input type="range" min="0" max={duration} value={position} onChange={handlePositionChange} />
                {getTime(duration)}
            </div>
            <div className="player_controls">
                <FontAwesomeIcon icon={faStepBackward} />
                <FontAwesomeIcon icon={faPlay} />
                {/* TODO : Make this state depended */}
                {/* <FontAwesomeIcon icon={faPause} /> */}
                <FontAwesomeIcon icon={faStepForward} />
            </div>
            <div className="player_volume">
                <FontAwesomeIcon icon={faVolumeHigh} />
                <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} />
            </div>
        </div>
    );
};

export default Player;