import classNames from 'classnames/bind';
import styles from './ContentVideo.mudule.scss';
import Tippy from '@tippyjs/react/headless';
import { connect } from 'react-redux';
import homeDispatchs from '../../../store/actions/homeDispatchs';
import { Wrapper as OptionWrapper } from '../../Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { BrokenHeartIcon, ReportIcon, Volume, XmarkVolume } from '../../Icon';
import { useEffect, useRef, useState } from 'react';
import Button from '../../Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function ContentVideo({ index, data, autoPlay, isDefaultOutOfScreen, loadMoreVideo, ...props }) {
    // redux
    const volumeData = props.volumeData;
    const isAutoMute = volumeData.isAutoMute;
    const syncVolume = volumeData.syncVolume;
    const prevSyncVolume = volumeData.prevSyncVolume;
    const onGlobalMute = props.onGlobalMute;
    const onGlobalVolume = props.onGlobalVolume;
    const onGlobalPrevValume = props.onGlobalPrevValume;
    // useRef
    const playController = useRef();
    const volumeBar = useRef();
    const volumeSlider = useRef();
    // eslint-disable-next-line no-unused-vars
    const [allData, setAllData] = useState(data);
    const [isMount, setIsMount] = useState(isDefaultOutOfScreen);
    const [isEnter, setIsEnter] = useState(false);
    const [isEnterTippy, setIsEnterTippy] = useState(false);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [volumeValue, setVolumeValue] = useState(syncVolume);
    const [isEnterProgress, setEnterProGress] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [posSlider, setPosSlider] = useState(0);
    const [totalTime, setTotalTime] = useState('');
    const [currentTime, setCurrentTime] = useState('00:00');

    useEffect(() => {
        if (isMount && (index + 2) % 15 === 0) {
            loadMoreVideo(index);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMount]);

    useEffect(() => {
        if (playController.current) {
            playController.current.volume = syncVolume;
        }
    });

    useEffect(() => {
        if (isMount) {
            playController.current.play();
            setIsPlaying(true);
        } else {
            playController.current.pause();
            setIsPlaying(false);
        }
    }, [isMount]);

    useEffect(() => {
        playController.current.volume = syncVolume;
        if (volumeBar.current) {
            volumeBar.current.style.height = `${syncVolume * 100}%`;
        }
        if (volumeSlider.current) {
            volumeSlider.current.style.top = `${(1 - syncVolume) * 80}%`;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [volumeValue]);

    // handle functions
    useEffect(() => {
        const listenWindow = () => {
            if (playController.current) {
                const windowHeight = window.innerHeight;
                const videoTop = playController.current.getBoundingClientRect().top;
                const videoBottom = playController.current.getBoundingClientRect().bottom;
                const videoHeight = playController.current.getBoundingClientRect().height;
                if (!isMount) {
                    if (videoTop > 0 && videoBottom < windowHeight) {
                        setIsMount(true);
                    }
                } else if (isMount) {
                    if (videoTop + videoHeight / 2 < 0 || videoTop + videoHeight / 2 > windowHeight) {
                        setIsMount(false);
                    }
                }
            }
        };
        window.addEventListener('scroll', listenWindow);
        return () => window.removeEventListener('scroll', listenWindow);
    });

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
                    <div className={cx('wrapper-volume')} onMouseUp={handleVolumeUp}>
                        <div
                            className={cx('volume-bar')}
                            ref={volumeBar}
                            style={{ height: `${syncVolume * 100}%` }}
                        ></div>
                        <div
                            className={cx('volume-slider')}
                            ref={volumeSlider}
                            style={{ top: `${(1 - syncVolume) * 80}%` }}
                            onMouseUp={(e) => e.stopPropagation()}
                        ></div>
                    </div>
                </div>
            </div>
        );
    };

    const handlePlay = (e) => {
        e.preventDefault();
        if (playController.current.paused) {
            playController.current.play();
            setIsPlaying(true);
        } else {
            playController.current.pause();
            setIsPlaying(false);
        }
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

    const handleVolumeUp = (e) => {
        const elementRect = e.target.getBoundingClientRect();
        const currentPosY = e.clientY;
        let currentPercent = (elementRect.height - currentPosY + elementRect.y) / elementRect.height;
        if (currentPercent < 0.1) {
            currentPercent = 0;
            onGlobalPrevValume(syncVolume);
            onGlobalMute(true);
        } else {
            currentPercent = currentPercent.toFixed(1);
            if (isAutoMute) {
                onGlobalMute(false);
            }
        }
        setVolumeValue(currentPercent);
        onGlobalVolume(currentPercent);
    };

    const handleMute = () => {
        if (isAutoMute) {
            // setVolumeValue(prevVolumeValue);
            setVolumeValue(prevSyncVolume);
            onGlobalVolume(prevSyncVolume);
        } else {
            // setPreVVolumeValue(syncVolume);
            onGlobalPrevValume(syncVolume);
            setVolumeValue(0);
            onGlobalVolume(0);
        }
        // setIsMute(!isMute);
        onGlobalMute(!isAutoMute);
    };

    // transform to single view mode

    const onSingleVideo = (e) => {
        e.stopPropagation();
        console.log(data.id);
        props.setCurrentVideo(index);
    };

    return (
        <Link className={cx('wrapper')} to={`/@_${data.user.nickname}/video/${data.id}`} onClick={onSingleVideo}>
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
                    src={allData.file_url}
                    preload="auto"
                    autoPlay={autoPlay}
                    muted={isAutoMute}
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
                    <div onClick={(e) => e.preventDefault()}>
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
                    <div onClick={(e) => e.preventDefault()}>
                        <Tippy
                            interactive
                            offset={[4, 12]}
                            delay={[0, 100]}
                            placement="right-start"
                            render={renderVolumeController}
                            hideOnClick={false}
                        >
                            <div className={cx('volume-controller')} onClick={handleMute}>
                                {!isAutoMute && <Volume className={cx('volume-on')}></Volume>}
                                {isAutoMute && <XmarkVolume className={cx('volume-off')}></XmarkVolume>}
                            </div>
                        </Tippy>
                    </div>
                )}
                {(isEnter || isEnterTippy) && (
                    <div
                        className={cx('seek-controller')}
                        onMouseEnter={() => setEnterProGress(true)}
                        onMouseLeave={() => setEnterProGress(false)}
                        onClick={(e) => e.preventDefault()}
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
        </Link>
    );
}
const mapStateToProps = (state) => {
    return {
        volumeData: {
            isAutoMute: state.isAutoMute,
            syncVolume: state.syncVolume,
            prevSyncVolume: state.prevSyncVolume,
        },
    };
};

const mapDispatchToProps = homeDispatchs;
export default connect(mapStateToProps, mapDispatchToProps)(ContentVideo);
