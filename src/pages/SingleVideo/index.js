import classNames from 'classnames/bind';
import styles from './SingleVideo.module.scss';
import Image from '../../components/Image';
import homeDispatchs from '../../store/actions/homeDispatchs';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);
function SingleVideo({ page, ...props }) {
    const data = props.data.homeData[props.data.current];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('background-container')}>
                <Image src={data.thumb_url} className={cx('background-image')}></Image>
            </div>
            <div className={cx('video-container')}>
                <div className={cx('video-cover')}>
                    <video src={data.file_url} className={cx('video')} autoPlay loop controls></video>
                </div>
            </div>
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
    };
};

const mapDispatchToProps = homeDispatchs;
export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo);
