import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import HeaderVideo from './HeaderVideo';
import ContentVideo from './ContentVideo/ContentVideo';
import ActionItems from './ActionItems';

const cx = classNames.bind(styles);

function Video({ index, data, autoPlay, isDefaultOutOfScreen, loadMoreVideo, openModal }) {
    return (
        <div className={cx('video')}>
            <HeaderVideo data={data} openModal={openModal}></HeaderVideo>
            <div className={cx('wrapper-content')}>
                <ContentVideo
                    data={data}
                    autoPlay={autoPlay}
                    isDefaultOutOfScreen={isDefaultOutOfScreen}
                    index={index}
                    loadMoreVideo={loadMoreVideo}
                ></ContentVideo>
                <ActionItems className={cx('action-items')} data={data}></ActionItems>
            </div>
        </div>
    );
}

export default Video;
