import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from '../../components/Video/Video';
import { useEffect, useState } from 'react';
import * as videoServices from '../../service/videoServices';
const cx = classNames.bind(styles);

function Home() {
    const [isAutoMute, setIsAutoMute] = useState(true);
    const [syncVolume, setSyncVolume] = useState(0);
    const [prevSyncVolume, setPrevSyncVolume] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [isDefaultOutOfScreen, setIsDefaultOutOfScreen] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        callAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const onGlobalMute = (isMute) => {
        setIsAutoMute(isMute);
    };

    const onGlobalVolume = (currentVolume) => {
        setSyncVolume(currentVolume);
    };

    const onGlobalPrevValume = (prevVolume) => {
        setPrevSyncVolume(prevVolume);
    };

    const callAPI = async () => {
        const response = await videoServices.getRcmVideo('for-you', page);
        setData((prevData) => [...prevData, ...response.data]);
    };

    const loadMoreVideo = (index) => {
        if (index + 2 === page * 15) {
            setPage(page + 1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {data.map((video, index) => {
                if (index === 0) {
                    return (
                        <Video
                            key={index}
                            index={index}
                            autoPlay={true}
                            isAutoMute={isAutoMute}
                            onGlobalMute={onGlobalMute}
                            isDefaultOutOfScreen={!isDefaultOutOfScreen}
                            onGlobalVolume={onGlobalVolume}
                            syncVolume={syncVolume}
                            prevSyncVolume={prevSyncVolume}
                            onGlobalPrevValume={onGlobalPrevValume}
                            data={video}
                            loadMoreVideo={loadMoreVideo}
                        ></Video>
                    );
                } else {
                    return (
                        <Video
                            key={index}
                            index={index}
                            autoPlay={false}
                            isAutoMute={isAutoMute}
                            onGlobalMute={onGlobalMute}
                            isDefaultOutOfScreen={isDefaultOutOfScreen}
                            onGlobalVolume={onGlobalVolume}
                            syncVolume={syncVolume}
                            prevSyncVolume={prevSyncVolume}
                            onGlobalPrevValume={onGlobalPrevValume}
                            data={video}
                            loadMoreVideo={loadMoreVideo}
                        ></Video>
                    );
                }
            })}
        </div>
    );
}

export default Home;
