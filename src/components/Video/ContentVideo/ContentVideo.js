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
    const volumeBar = useRef();
    const volumeSlider = useRef();
    const [isEnter, setIsEnter] = useState(false);
    const [isEnterTippy, setIsEnterTippy] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMute, setIsMute] = useState(true);
    const [posSlider, setPosSlider] = useState(0);
    const [isEnterProgress, setEnterProGress] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [volumeValue, setVolumeValue] = useState(1);
    const [totalTime, setTotalTime] = useState('');
    const [currentTime, setCurrentTime] = useState('00:00');
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

    const renderVolumeController = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <div className={cx('adjust-volume')}>
                    <div className={cx('wrapper-volume')} onMouseDown={handleVolumDown} onMouseUp={handleVolumeUp}>
                        <div
                            className={cx('volume-bar')}
                            ref={volumeBar}
                            style={{ height: `${volumeValue * 100}%` }}
                        ></div>
                        <div
                            className={cx('volume-slider')}
                            ref={volumeSlider}
                            style={{ top: `${(1 - volumeValue) * 80}%` }}
                            onMouseUp={(e) => e.stopPropagation()}
                        ></div>
                    </div>
                </div>
            </div>
        );
    };
    useEffect(() => {
        playController.current.volume = volumeValue;
        if (volumeBar.current) {
            volumeBar.current.style.height = `${volumeValue * 100}%`;
        }
        if (volumeSlider.current) {
            volumeSlider.current.style.top = `${(1 - volumeValue) * 80}%`;
        }
    }, [volumeValue]);

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

    const handleUpdateTime = (e) => {
        if (totalTime === '') {
            setTotalTime(handleCurrentTime(e.target.duration));
        }
        if (!isMouseDown) {
            const currentPercent = Math.floor(100 * (e.target.currentTime / e.target.duration));
            setPosSlider(currentPercent);
            setCurrentTime(handleCurrentTime(e.target.currentTime));
        }
    };

    const handleMouseUp = (e) => {
        const elementRect = e.target.getBoundingClientRect();
        const currentPosX = e.clientX;
        const currentPercent = Math.floor(((currentPosX - elementRect.x) / elementRect.width) * 100);
        playController.current.currentTime = (currentPercent / 100) * playController.current.duration;
        setPosSlider(currentPercent);
        setIsMouseDown(false);
    };

    const handleMouseDown = () => {
        setIsMouseDown(true);
    };

    const handleCurrentTime = (time) => {
        const minute = Math.trunc(time / 60);
        const second = Math.floor(time) - minute * 60;
        return `0${minute}:${second < 10 ? `0${second}` : second}`;
    };

    // handle volume
    const handleVolumDown = () => {};

    const handleVolumeUp = (e) => {
        const elementRect = e.target.getBoundingClientRect();
        const currentPosY = e.clientY;
        let currentPercent = (elementRect.height - currentPosY + elementRect.y) / elementRect.height;
        if (currentPercent < 0.1) {
            currentPercent = 0;
        } else {
            currentPercent = currentPercent.toFixed(1);
        }
        setVolumeValue(currentPercent);
    };

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('video-wrapper')}
                onMouseEnter={() => {
                    setIsEnter(true);
                }}
                onMouseLeave={() => {
                    setIsEnter(true);
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
                    onTimeUpdate={handleUpdateTime}
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
                    <>
                        <Tippy
                            interactive
                            offset={[4, 12]}
                            delay={[0, 100]}
                            placement="right-start"
                            render={renderVolumeController}
                            hideOnClick={false}
                        >
                            <div className={cx('volume-controller')} onClick={handleMute}>
                                {!isMute && <Volume className={cx('volume-on')}></Volume>}
                                {isMute && <XmarkVolume className={cx('volume-off')}></XmarkVolume>}
                            </div>
                        </Tippy>
                    </>
                )}
                {(isEnter || isEnterTippy) && (
                    <div
                        className={cx('seek-controller')}
                        onMouseEnter={() => setEnterProGress(true)}
                        onMouseLeave={() => setEnterProGress(false)}
                    >
                        <div className={cx('control-seek-bar')} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
                            <div className="wrapper-seek-bar">
                                <div className={cx('seek-bar')} style={{ width: `${posSlider}%` }}></div>
                                {isEnterProgress && (
                                    <div className={cx('slider')} style={{ left: `${posSlider}%` }}></div>
                                )}
                            </div>
                        </div>
                        <div className={cx('time')}>
                            <div className={cx('real-time')}>
                                {currentTime}/{totalTime}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContentVideo;
