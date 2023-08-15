import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from '../../components/Video/Video';
import { useState } from 'react';
const cx = classNames.bind(styles);
const data = [1];
function Home() {
    const [autoPlay, setAutoPlay] = useState(false);
    const [isAutoMute, setIsAutoMute] = useState(true);
    const [syncVolume, setSyncVolume] = useState(0);
    const [prevSyncVolume, setPrevSyncVolume] = useState(1);
    const [isDefaultOutOfScreen, setIsDefaultOutOfScreen] = useState(false);
    const onGlobalMute = (isMute) => {
        setIsAutoMute(isMute);
    };

    const onGlobalVolume = (currentVolume) => {
        setSyncVolume(currentVolume);
    };

    const onGlobalPrevValume = (prevVolume) => {
        setPrevSyncVolume(prevVolume);
    };
    return (
        <div className={cx('wrapper')}>
            {data.map((video, index) => {
                if (index === 0) {
                    return (
                        <Video
                            key={index}
                            autoPlay={true}
                            isAutoMute={isAutoMute}
                            onGlobalMute={onGlobalMute}
                            isDefaultOutOfScreen={!isDefaultOutOfScreen}
                            onGlobalVolume={onGlobalVolume}
                            syncVolume={syncVolume}
                            prevSyncVolume={prevSyncVolume}
                            onGlobalPrevValume={onGlobalPrevValume}
                        ></Video>
                    );
                } else {
                    return (
                        <Video
                            key={index}
                            autoPlay={false}
                            isAutoMute={isAutoMute}
                            onGlobalMute={onGlobalMute}
                            isDefaultOutOfScreen={isDefaultOutOfScreen}
                            onGlobalVolume={onGlobalVolume}
                            syncVolume={syncVolume}
                            prevSyncVolume={prevSyncVolume}
                            onGlobalPrevValume={onGlobalPrevValume}
                        ></Video>
                    );
                }
            })}
        </div>
    );
}

export default Home;
