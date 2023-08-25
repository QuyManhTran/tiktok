import classNames from 'classnames/bind';
import styles from './SidebarSingleView.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);
function SidebarSingleView() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-comment')}>
                <div className={cx('inner-comment')}>
                    <Header></Header>
                </div>
            </div>
        </div>
    );
}

export default SidebarSingleView;
