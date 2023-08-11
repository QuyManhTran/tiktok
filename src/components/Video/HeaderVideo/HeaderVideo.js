import classNames from 'classnames/bind';
import styles from './HeaderVideo.module.scss';
import Image from '../../Image';
import Button from '../../Button';
import PreviewProfile from '../../PreviewProfile/PreviewProfile';
import { MusicIcon } from '../../Icon';
import { Link } from 'react-router-dom';
import { hashtags } from '../../../asset/data/hashTagData';

import { useState } from 'react';
const cx = classNames.bind(styles);
const user = {
    id: 4854,
    first_name: 'Death',
    last_name: 'Click!',
    nickname: 'xucana',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4854/646231eb7a517.png',
    tick: false,
    is_followed: false,
    followings_count: 4,
    followers_count: 225,
    likes_count: 14,
    website_url: 'Https://tiktok.nghiane.online',
};
function HeaderVideo() {
    // const [currentUser, setCurrentUser] = useState(user);
    const [isFollowed, setIsFollowed] = useState(user.is_followed);
    const handleFollow = () => {
        setIsFollowed(!isFollowed);
    };

    const handleFollowBack = (isFollow) => {
        setIsFollowed(isFollow);
    };

    return (
        <div className={cx('wrapper')}>
            <PreviewProfile user={user} isFollowed={isFollowed} handleFollowBack={handleFollowBack}>
                <Link to={'/huynhynhi18.06'} className={cx('avatarLink')}>
                    <Image
                        className={cx('avatar')}
                        alt="Huynh Tran Y Nhi"
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2ee29dd59f8fbb6c46bca00e40ed129e~c5_100x100.jpeg?x-expires=1691848800&x-signature=%2FmlDUcMIhnlHaqF7%2F8GHPCNTnvM%3D"
                    ></Image>
                </Link>
            </PreviewProfile>
            <div className={cx('body')}>
                <Link className={cx('profile-body')} to={'/huynhynhi18.06'}>
                    <h3 className={cx('user-name')}>huynhynhi18.06</h3>
                    <h4 className={cx('name')}>Huynh Tran Y Nhi</h4>
                </Link>
                <span className={cx('description')}>
                    Tôi đã có một bước nhảy vọt so với các bạn cùng trang lứa. Trong khi các bạn còn uống trà sữa thì em
                    đã là một hoa hậu rồi...
                    {hashtags.map((hashtag, index) => (
                        <Link to={`/tag/${hashtag}`} className={cx('hash-tag')} key={index}>
                            {hashtag}
                        </Link>
                    ))}
                </span>
                <a
                    target="_blank"
                    href={'https://soundcloud.com/user-624009075/tra-i-tim-em-va-do-ng-ma-u-no'}
                    className={cx('music-link')}
                    rel="noreferrer"
                >
                    <MusicIcon className={cx('music-icon')}></MusicIcon>
                    <span className={cx('music-title')}>Trai tim em va dong mau nong remix</span>
                </a>
            </div>
            <div className={cx('following')}>
                <Button outline following={isFollowed} onClick={handleFollow} className={cx('btn-follow')}>
                    {isFollowed ? 'Following' : 'Follow'}
                </Button>
            </div>
        </div>
    );
}

export default HeaderVideo;
