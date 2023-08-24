import classNames from 'classnames/bind';
import styles from './SingleVideo.module.scss';
import Image from '../../components/Image';
import homeDispatchs from '../../store/actions/homeDispatchs';
import { connect } from 'react-redux';
import { CloseIcon, DownArrowIcon, UpArrowIcon } from '../../components/Icon';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Volume from '../../components/Volume';

const cx = classNames.bind(styles);
function SingleVideo({ page, ...props }) {
    const videoRef = useRef();
    const isAutoMute = props.volume.isAutoMute;
    const syncVolume = props.volume.syncVolume;
    const homeData = props.data.homeData;
    const current = props.data.current;
    const data = homeData[current];
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        // setvolume when element mount
        if (videoRef.current) {
            videoRef.current.volume = syncVolume;
        }
    });

    // function
    const onForwardVideo = (e) => {
        e.stopPropagation();
        setIsPlaying(true);
        props.setCurrentVideo(current + 1);
    };

    const onBackward = (e) => {
        e.stopPropagation();
        setIsPlaying(true);
        props.setCurrentVideo(current - 1);
    };

    const onPlayVideo = (e) => {
        if (videoRef.current) {
            if (!isPlaying) {
                setIsPlaying(true);
                videoRef.current.play();
            } else {
                setIsPlaying(false);
                videoRef.current.pause();
            }
        }
    };

    return (
        <div className={cx('wrapper')} onClick={onPlayVideo}>
            <div className={cx('background-container')}>
                <Image src={data.thumb_url} className={cx('background-image')}></Image>
            </div>
            <div className={cx('video-container')}>
                <div className={cx('video-cover')}>
                    <video
                        ref={videoRef}
                        src={data.file_url}
                        className={cx('video')}
                        preload="auto"
                        autoPlay
                        muted={isAutoMute}
                        loop
                    ></video>
                </div>
            </div>
            {current > 0 && (
                <Link
                    to={`/@_${homeData[current - 1].user.nickname}/video/${homeData[current - 1].id}`}
                    className={cx('backward-video-btn')}
                    onClick={onBackward}
                >
                    <UpArrowIcon className={cx('up-icon')}></UpArrowIcon>
                </Link>
            )}
            {current < homeData.length - 1 && (
                <Link
                    to={`/@_${homeData[current + 1].user.nickname}/video/${homeData[current + 1].id}`}
                    className={cx('forward-video-btn')}
                    onClick={onForwardVideo}
                >
                    <DownArrowIcon className={cx('down-icon')}></DownArrowIcon>
                </Link>
            )}
            <Link to={'/'}>
                <button className={cx('close-btn')}>
                    <CloseIcon></CloseIcon>
                </button>
            </Link>
            {!isPlaying && <FontAwesomeIcon icon={faPlay} className={cx('play-icon')} />}
            <Volume big></Volume>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        data: {
            homeData: state.homeData.data,
            page: state.homeData.page,
            current: state.homeData.current,
        },
        volume: {
            isAutoMute: state.isAutoMute,
            syncVolume: state.syncVolume,
        },
    };
};

const mapDispatchToProps = homeDispatchs;
export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo);
