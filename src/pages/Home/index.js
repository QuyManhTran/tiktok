import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from '../../components/Video/Video';
import { useEffect } from 'react';
import * as videoServices from '../../service/videoServices';
import { connect } from 'react-redux';
import homeDispatchs from '../../store/actions/homeDispatchs';

const cx = classNames.bind(styles);

function Home({ ...props }) {
    const page = props.data.page;
    const data = props.data.homeData;
    const current = props.data.current;
    const setData = props.setData;
    const setPage = props.setPage;
    const isDefaultOutOfScreen = props.data.isDefaultOutOfScreen;
    useEffect(() => {
        if (current === null) {
            props.setCurrentVideo(-1);
            callAPI();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    const callAPI = async (page) => {
        const response = await videoServices.getRcmVideo('for-you', page);
        setData([...data, ...response.data]);
    };

    const loadMoreVideo = (index) => {
        if (index + 2 === page * 15) {
            setPage(page + 1);
            callAPI(page + 1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {data.map((video, index) => {
                return (
                    <Video
                        key={index}
                        index={index}
                        autoPlay={index === 0 ? true : false}
                        isDefaultOutOfScreen={index === 0 ? !isDefaultOutOfScreen : isDefaultOutOfScreen}
                        data={video}
                        loadMoreVideo={loadMoreVideo}
                    ></Video>
                );
            })}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        data: {
            isDefaultOutOfScreen: state.isDefaultOutOfScreen,
            homeData: state.homeData.data,
            page: state.homeData.page,
            current: state.homeData.current,
        },
    };
};

const mapDispatchToProps = homeDispatchs;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
