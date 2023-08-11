import classNames from 'classnames/bind';
import styles from './RecommendedAccounts.module.scss';
import PropTypes from 'prop-types';
import Image from '../Image';
import Button from '../Button';

import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Wrapper as PopperWrapper } from '../Popper';
import { useState } from 'react';
const cx = classNames.bind(styles);
function AccountItem({ user }) {
    const [isFollow, setIsFollow] = useState(user.is_followed);
    const handleFollow = () => {
        console.log('oke');
        setIsFollow(!isFollow);

        // Call API
    };

    const renderPreview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <header className={cx('header-preview')}>
                            <Image
                                className={cx('avatar', {
                                    avatarPreview: true,
                                })}
                                alt={user.first_name + ' ' + user.last_name}
                                src={user.avatar}
                            ></Image>
                            <Button
                                primary={!isFollow}
                                outline={isFollow}
                                className={cx('follow-btn')}
                                onClick={handleFollow}
                            >
                                {isFollow ? 'Following' : 'Follow'}
                            </Button>
                        </header>
                        <div className={cx('body-preview')}>
                            <p
                                className={cx('user-name', {
                                    [cx('user-name-preview')]: true,
                                })}
                            >
                                <strong>{user.nickname}</strong>
                                {user.tick && (
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className={cx('check-icon')}
                                    ></FontAwesomeIcon>
                                )}
                            </p>
                            <p className={cx('name')}>{user.first_name + ' ' + user.last_name}</p>
                        </div>
                        <footer className={cx('footer-preview')}>
                            <p className={cx('analytics')}>
                                <span className={cx('followers')}>
                                    <strong className={cx('amount')}>{user.followings_count}M</strong>
                                    <strong className={cx('title')}>Followers</strong>
                                </span>
                                <span className={cx('likes')}>
                                    <strong className={cx('amount')}>{user.likes_count}M</strong>
                                    <strong className={cx('title')}>Likes</strong>
                                </span>
                            </p>
                        </footer>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive offset={[-5, -5]} delay={[400, 0]} placement="bottom-start" render={renderPreview}>
                <Link to={`/${user.nickname}`} className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        alt={user.first_name + ' ' + user.last_name}
                        src={user.avatar}
                    ></Image>
                    <div className={cx('infor')}>
                        <p className={cx('user-name')}>
                            <strong>{user.nickname}</strong>
                            {user.tick && (
                                <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')}></FontAwesomeIcon>
                            )}{' '}
                        </p>
                        <p className={cx('name')}>{user.first_name + ' ' + user.last_name}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    user: PropTypes.object,
};
export default AccountItem;
