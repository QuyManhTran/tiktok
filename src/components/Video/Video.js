import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import HeaderVideo from './HeaderVideo';
import ContentVideo from './ContentVideo/ContentVideo';
import ActionItems from './ActionItems';

const cx = classNames.bind(styles);

function Video({
    index,
    data,
    autoPlay,
    isAutoMute,
    isDefaultOutOfScreen,
    syncVolume,
    prevSyncVolume,
    onGlobalMute,
    onGlobalVolume,
    onGlobalPrevValume,
    loadMoreVideo,
}) {
    return (
        <div className={cx('video')}>
            <HeaderVideo data={data}></HeaderVideo>
            <div className={cx('wrapper-content')}>
                <ContentVideo
                    data={data}
                    autoPlay={autoPlay}
                    isAutoMute={isAutoMute}
                    onGlobalMute={onGlobalMute}
                    isDefaultOutOfScreen={isDefaultOutOfScreen}
                    onGlobalVolume={onGlobalVolume}
                    syncVolume={syncVolume}
                    prevSyncVolume={prevSyncVolume}
                    onGlobalPrevValume={onGlobalPrevValume}
                    index={index}
                    loadMoreVideo={loadMoreVideo}
                ></ContentVideo>
                <ActionItems className={cx('action-items')} data={data}></ActionItems>
            </div>
        </div>
    );
}

export default Video;
