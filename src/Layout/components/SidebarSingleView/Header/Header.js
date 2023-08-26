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
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const link = 'https://soundcloud.com/user-624009075/tra-i-tim-em-va-do-ng-ma-u-no';
function Header({ ...props }) {
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
                        alt="hoa hau y nhi"
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/a02858c054eb63ed88751bb8c8f6e0f1~c5_100x100.jpeg?x-expires=1693141200&x-signature=iqbOAmGbr4%2Fo2uYcfEzCnFs2Nok%3D"
                        className={cx('avatar-user')}
                    ></Image>
                    <div className={cx('infor-user')}>
                        <span className={cx('username')}>
                            englishteacherclaire
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                        </span>
                        <span className={cx('name')}>Claire . 12/7</span>
                    </div>
                    <Button primary className={cx('btn-follow')}>
                        Follow
                    </Button>
                </Link>
                <div className={cx('describe-post')}>
                    <span className={cx('content')}>
                        Did this ever happen to you? 😅🙄🥱 Your shirt is on backwards. Your jacket is inside out.
                    </span>
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
                        <span className={cx('analystics')}>7.5M</span>
                    </div>
                    <div className={cx('reaction-icon')} style={{ pointerEvents: 'none' }}>
                        <ActionItem
                            className={cx('icon')}
                            icon={<CommentIcon className={cx('icon-react')} />}
                        ></ActionItem>
                        <span className={cx('analystics')}>15.4K</span>
                    </div>
                    <div className={cx('reaction-icon')}>
                        <ActionItem
                            className={cx('icon')}
                            icon={<FavoriteIcon className={cx('icon-react')} />}
                            active={cx('yellow-active')}
                            isLogin={props.data.isLogin}
                        ></ActionItem>
                        <span className={cx('analystics')}>837.2K</span>
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
                    <Tippy content="Share">
                        <span>
                            <ShareIcon
                                className={cx('share-icon', {
                                    sendicon: true,
                                })}
                            ></ShareIcon>
                        </span>
                    </Tippy>
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
        },
    };
};
export default connect(mapStateToProps, null)(Header);
