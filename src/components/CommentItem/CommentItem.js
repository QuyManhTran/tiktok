/* eslint-disable no-useless-computed-key */
import classNames from 'classnames/bind';
import styles from './CommentItem.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Option from '../Option';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);
function CommentItem() {
    const [isActive, setIsActive] = useState(false);
    const [isEnter, setIsEnter] = useState(false);
    const onHeart = () => {
        setIsActive(!isActive);
    };
    const onEnter = () => {
        setIsEnter(true);
    };
    const onLeave = () => {
        setIsEnter(false);
    };
    return (
        <div className={cx('comment-container')} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div
                className={cx('wrapper-infor', {
                    ['wrapper-comment']: true,
                })}
            >
                <Link className={cx('user-link')}>
                    <Image
                        alt="hoa hau y nhi"
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/a02858c054eb63ed88751bb8c8f6e0f1~c5_100x100.jpeg?x-expires=1693141200&x-signature=iqbOAmGbr4%2Fo2uYcfEzCnFs2Nok%3D"
                        className={cx('avatar-user')}
                    ></Image>
                </Link>
                <div className={cx('infor-user')}>
                    <Link style={{ lineHeight: '20px' }}>
                        <span className={cx('avatar-comment')}>
                            englishteacherclaire
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                        </span>
                    </Link>
                    <span className={cx('comment')}>Can use “stir” instead whip ?</span>
                    <span className={cx('comment-infor')}>
                        6-5
                        <span className={cx('reply')}>Reply</span>
                    </span>
                </div>
                <div className={cx('react-heart')}>
                    {isEnter && <Option black report></Option>}
                    <div className={cx('action-wrapper')} onClick={onHeart}>
                        {!isActive && <FontAwesomeIcon icon={faHeart} className={cx('heart-icon')}></FontAwesomeIcon>}
                        {isActive && (
                            <FontAwesomeIcon icon={faHeartActive} className={cx('heart-icon_active')}></FontAwesomeIcon>
                        )}
                    </div>
                    <span className={cx('comment-amount')}>{isActive ? '27' : '26'}</span>
                </div>
            </div>
            <div className={cx('reply-view')}>
                View 1 replies
                <FontAwesomeIcon icon={faAngleDown} className={cx('arrow-down')}></FontAwesomeIcon>
            </div>
        </div>
    );
}
export default CommentItem;
