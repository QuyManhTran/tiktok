/* eslint-disable no-useless-computed-key */
import classNames from 'classnames/bind';
import styles from './SidebarSingleView.module.scss';
import Header from './Header';
import CommentItem from '../../../components/CommentItem/CommentItem';
import { allDay } from '../../../asset/data/formData';

const cx = classNames.bind(styles);
function SidebarSingleView() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-comment')}>
                <Header></Header>

                <div className={cx('navbar-container')}>
                    <div className={cx('creator-video')}>Creator videos</div>
                    <div
                        className={cx('Comments', {
                            ['nav-bar_active']: true,
                        })}
                    >
                        Comments(1168)
                    </div>
                </div>
                {allDay.map((element, index) => (
                    <CommentItem key={index}></CommentItem>
                ))}
            </div>
        </div>
    );
}

export default SidebarSingleView;
