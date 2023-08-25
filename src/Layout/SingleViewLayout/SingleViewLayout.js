import classNames from 'classnames/bind';
import styles from './SingleViewLayout.module.scss';
import SidebarSingleView from '../components/SidebarSingleView/SidebarSingleView';

const cx = classNames.bind(styles);
function SingleViewLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            {children}
            <SidebarSingleView></SidebarSingleView>
        </div>
    );
}

export default SingleViewLayout;
