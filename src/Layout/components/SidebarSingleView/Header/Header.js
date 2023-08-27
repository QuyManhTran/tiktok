import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Image from '../../../../components/Image';
import Button from '../../../../components/Button';
import {
    CommentIcon,
    EmbedIcon,
    FacebookIcon,
    FavoriteIcon,
    MusicIcon,
    SendIcon,
    ShareIcon,
    Twitter,
    WhatsAppIcon,
} from '../../../../components/Icon';
import ActionItem from '../../../../components/ActionItem/ActionItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faHeart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import ShareLink from '../../../../components/ShareLink';
import { Wrapper } from '../../../../components/Popper';
// import { useEffect, useState } from 'react';
import defaultDispatchs from '../../../../store/actions/defaultDispatch';
const cx = classNames.bind(styles);
const link = 'https://soundcloud.com/user-624009075/tra-i-tim-em-va-do-ng-ma-u-no';
function Header({ ...props }) {
    const userData = props.data.userData;
    const isFollowing = userData.user.is_followed;

    const onFollow = () => {
        userData.user.is_followed = !isFollowing;
        props.onFollow(userData);
    };
    const onCopyLink = (e) => {
        navigator.clipboard.writeText(link);
        e.target.innerText = 'Copied';
        setTimeout(() => {
            e.target.innerText = 'Copy link';
        }, 1000);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-content')}>
                <Link className={cx('wrapper-infor')}>
                    <Image
                        alt={userData.user.first_name + ' ' + userData.user.last_name}
                        src={userData.user.avatar}
                        className={cx('avatar-user')}
                    ></Image>
                    <div className={cx('infor-user')}>
                        <span className={cx('username')}>
                            {userData.user.nickname}
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                        </span>
                        <span className={cx('name')}>
                            {userData.user.first_name + ' ' + userData.user.last_name} . 12/7
                        </span>
                    </div>
                    <Button
                        primary={!isFollowing}
                        outline={isFollowing}
                        className={cx('btn-follow')}
                        onClick={onFollow}
                    >
                        {!isFollowing ? 'Follow' : 'Following'}
                    </Button>
                </Link>
                <div className={cx('describe-post')}>
                    <span className={cx('content')}>{userData.description}</span>
                </div>
                <a
                    className={cx('trend')}
                    href="https://soundcloud.com/user-624009075/tra-i-tim-em-va-do-ng-ma-u-no"
                    target="_blank"
                    rel="noreferrer"
                >
                    <MusicIcon></MusicIcon>
                    <div className={cx('name-music')}>funny dogs and cats moments</div>
                </a>
            </div>
            <div className={cx('reaction-container')}>
                <div className={cx('inner-reactions')}>
                    <div className={cx('reaction-icon')}>
                        <ActionItem
                            className={cx('icon')}
                            icon={<FontAwesomeIcon icon={faHeart} className={cx('icon-react')} />}
                            active={cx('red-active')}
                            isLogin={props.data.isLogin}
                        ></ActionItem>
                        <span className={cx('analystics')}>{userData.user.likes_count}M</span>
                    </div>
                    <div className={cx('reaction-icon')} style={{ pointerEvents: 'none' }}>
                        <ActionItem
                            className={cx('icon')}
                            icon={<CommentIcon className={cx('icon-react')} />}
                        ></ActionItem>
                        <span className={cx('analystics')}>128K</span>
                    </div>
                    <div className={cx('reaction-icon')}>
                        <ActionItem
                            className={cx('icon')}
                            icon={<FavoriteIcon className={cx('icon-react')} />}
                            active={cx('yellow-active')}
                            isLogin={props.data.isLogin}
                        ></ActionItem>
                        <span className={cx('analystics')}>28K</span>
                    </div>
                </div>
                <div className={cx('inner-shares')}>
                    <Tippy content="Embed">
                        <span>
                            <EmbedIcon className={cx('share-icon')}></EmbedIcon>
                        </span>
                    </Tippy>
                    <Tippy content="Send to friends">
                        <span>
                            <SendIcon className={cx('share-icon')}></SendIcon>
                        </span>
                    </Tippy>
                    <Tippy content="Share to Facebook">
                        <span>
                            <FacebookIcon className={cx('share-icon')}></FacebookIcon>
                        </span>
                    </Tippy>
                    <Tippy content="Share to WhatsApp">
                        <span>
                            <WhatsAppIcon className={cx('share-icon')}></WhatsAppIcon>
                        </span>
                    </Tippy>
                    <Tippy content="Share to Twitter">
                        <span>
                            <Twitter className={cx('share-icon')}></Twitter>
                        </span>
                    </Tippy>
                    <TippyHeadless
                        render={(attrs) => {
                            return (
                                <div tabIndex="-1" {...attrs}>
                                    <Wrapper>
                                        <ShareLink linkedln telegram line email></ShareLink>
                                    </Wrapper>
                                </div>
                            );
                        }}
                        interactive
                        delay={[0, 400]}
                    >
                        <span>
                            <ShareIcon
                                className={cx('share-icon', {
                                    sendicon: true,
                                })}
                            ></ShareIcon>
                        </span>
                    </TippyHeadless>
                </div>
            </div>
            <div className={cx('copy-link')}>
                <p className={cx('content-link')}>
                    https://www.tiktok.com/@mrsiro.official/video/7266421749640662273?is_from_webapp=1&sender_device=pc&web_id=7126459553201325569
                </p>
                <button className={cx('copy-btn')} onClick={onCopyLink}>
                    Copy link
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: {
            isLogin: state.isLogin,
            userData: state.homeData.data[state.homeData.current],
        },
    };
};
const mapDispatchToProps = defaultDispatchs;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
