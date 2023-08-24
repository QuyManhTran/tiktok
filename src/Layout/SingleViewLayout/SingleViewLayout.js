import classNames from 'classnames/bind';
import styles from './SingleViewLayout.module.scss';

const cx = classNames.bind(styles);
function SingleViewLayout({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default SingleViewLayout;
