import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import HeaderVideo from './HeaderVideo';
const cx = classNames.bind(styles);

function Video({ data }) {
    return <HeaderVideo data={data}></HeaderVideo>;
}

export default Video;
