import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import HeaderVideo from './HeaderVideo';
import ContentVideo from './ContentVideo/ContentVideo';

const cx = classNames.bind(styles);

function Video({
    data,
    autoPlay,
    isAutoMute,
    isDefaultOutOfScreen,
    syncVolume,
    prevSyncVolume,
    onGlobalMute,
    onGlobalVolume,
    onGlobalPrevValume,
}) {
    return (
        <div className={cx('video')}>
            <HeaderVideo data={data}></HeaderVideo>
            <ContentVideo
                autoPlay={autoPlay}
                isAutoMute={isAutoMute}
                onGlobalMute={onGlobalMute}
                isDefaultOutOfScreen={isDefaultOutOfScreen}
                onGlobalVolume={onGlobalVolume}
                syncVolume={syncVolume}
                prevSyncVolume={prevSyncVolume}
                onGlobalPrevValume={onGlobalPrevValume}
            ></ContentVideo>
        </div>
    );
}

export default Video;
