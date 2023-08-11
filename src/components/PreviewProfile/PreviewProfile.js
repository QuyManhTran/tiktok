import classNames from 'classnames/bind';
import styles from './PreviewProfile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../Popper';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Image from '../Image';
import Button from '../Button';

const cx = classNames.bind(styles);
function PreviewProfile({ user, isFollowed, handleFollowBack, children }) {
    const [isFollow, setIsFollow] = useState(isFollowed);
    if (typeof isFollowed !== 'undefined') {
        if (isFollow !== isFollowed) {
            setIsFollow(isFollowed);
        }
    }

    const handleFollow = () => {
        setIsFollow(!isFollow);
        if (typeof handleFollowBack === 'function') handleFollowBack(!isFollow);
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
                                outline={!isFollow}
                                following={isFollow}
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
                {children}
            </Tippy>
        </div>
    );
}

export default PreviewProfile;
