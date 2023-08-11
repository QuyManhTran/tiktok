import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from '../../components/Video/Video';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Video></Video>
        </div>
    );
}

export default Home;
