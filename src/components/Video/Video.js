import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import HeaderVideo from './HeaderVideo';
const cx = classNames.bind(styles);

function Video({ data }) {
    return (
        <>
            <HeaderVideo data={data}></HeaderVideo>
            <video controls width="250">
                <source src="https://files.fullstack.edu.vn/f8-tiktok/videos/1357-63c803d8e7cf7.mp4" type="video/mp4" />
            </video>
        </>
    );
}

export default Video;
