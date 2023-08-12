import classNames from 'classnames/bind';
import styles from './ContentVideo.mudule.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faEllipsisVertical, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Volume, XmarkVolume } from '../../Icon';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);
function ContentVideo() {
    const playController = useRef();
    const [isEnter, setIsEnter] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMute, setIsMute] = useState(true);
    // handle functions
    const handlePlay = () => {
        if (playController.current.paused) {
            playController.current.play();
            setIsPlaying(true);
        } else {
            playController.current.pause();
            setIsPlaying(false);
        }
    };

    const handleMute = () => {
        setIsMute(!isMute);
    };

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('video-wrapper')}
                onMouseEnter={() => setIsEnter(true)}
                onMouseLeave={() => setIsEnter(false)}
            >
                <video
                    ref={playController}
                    className={cx('video')}
                    src="https://files.fullstack.edu.vn/f8-tiktok/videos/2943-64d72a62262ea.mp4"
                    preload="auto"
                    autoPlay
                    muted={isMute}
                    loop
                ></video>
                {isEnter && (
                    <div className="play-controller" onClick={handlePlay}>
                        {!isPlaying && <FontAwesomeIcon icon={faPlay} className="play-icon" />}
                        {isPlaying && <FontAwesomeIcon icon={faPause} className="pause-icon" />}
                    </div>
                )}
                {isEnter && (
                    <div className={cx('option-controller')}>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                )}
                {isEnter && (
                    <div className={cx('volume-controller')} onClick={handleMute}>
                        {!isMute && <Volume className={cx('volume-on')}></Volume>}
                        {isMute && <XmarkVolume className={cx('volume-off')}></XmarkVolume>}
                    </div>
                )}
                {/* <div className={cx('seek-controller')}>
                    <progress className="seek-bar" type="progress" value={'50'} max={'100'}></progress>
                    <div className={cx('time')}>
                        <span className="real-time">00:45</span>/<span className="total-time">00:60</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ContentVideo;
