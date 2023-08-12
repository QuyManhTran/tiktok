import classNames from 'classnames/bind';
import styles from './ContentVideo.mudule.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as OptionWrapper } from '../../Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { BrokenHeartIcon, ReportIcon, Volume, XmarkVolume } from '../../Icon';
import { useEffect, useRef, useState } from 'react';
import Button from '../../Button';

const cx = classNames.bind(styles);
function ContentVideo() {
    const playController = useRef();
    const [isEnter, setIsEnter] = useState(false);
    const [isEnterTippy, setIsEnterTippy] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMute, setIsMute] = useState(true);
    // handle functions

    const renderPreview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <OptionWrapper>
                    <div className={cx('video-view')}>
                        <Button className={cx('not-interested')} leftIcon={<BrokenHeartIcon></BrokenHeartIcon>}>
                            Not interested
                        </Button>

                        <Button className={cx('report')} leftIcon={<ReportIcon></ReportIcon>}>
                            Report
                        </Button>
                    </div>
                </OptionWrapper>
            </div>
        );
    };

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
                onMouseEnter={() => {
                    setIsEnter(true);
                }}
                onMouseLeave={() => {
                    setIsEnter(false);
                }}
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
                {(isEnter || isEnterTippy) && (
                    <div className="play-controller" onClick={handlePlay}>
                        {!isPlaying && <FontAwesomeIcon icon={faPlay} className="play-icon" />}
                        {isPlaying && <FontAwesomeIcon icon={faPause} className="pause-icon" />}
                    </div>
                )}
                {(isEnter || isEnterTippy) && (
                    <div>
                        <Tippy
                            interactive
                            offset={[20, 30]}
                            delay={[0, 100]}
                            placement="right-start"
                            render={renderPreview}
                            onMount={() => {
                                setIsEnterTippy(true);
                            }}
                            onHidden={() => {
                                setIsEnterTippy(false);
                            }}
                        >
                            <div className={cx('option-controller')}>
                                <FontAwesomeIcon icon={faEllipsisH} />
                            </div>
                        </Tippy>
                    </div>
                )}
                {(isEnter || isEnterTippy) && (
                    <div className={cx('volume-controller')} onClick={handleMute}>
                        {!isMute && <Volume className={cx('volume-on')}></Volume>}
                        {isMute && <XmarkVolume className={cx('volume-off')}></XmarkVolume>}
                    </div>
                )}
                {(isEnter || isEnterTippy) && (
                    <div className={cx('seek-controller')}>
                        <input className="seek-bar" type="range" value="50" step="1" min="0" max="100"></input>
                        <div className={cx('time')}>
                            <span className="real-time">00:45</span>/<span className="total-time">00:60</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContentVideo;
