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
function HeaderVideo(data) {
    // eslint-disable-next-line no-unused-vars
    const [allData, setAllData] = useState(data.data);
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState(allData.user);
    const [isFollowed, setIsFollowed] = useState(currentUser.is_followed);
    const handleFollow = () => {
        setIsFollowed(!isFollowed);
    };

    const handleFollowBack = (isFollow) => {
        setIsFollowed(isFollow);
    };

    return (
        <div className={cx('wrapper')}>
            <PreviewProfile user={currentUser} isFollowed={isFollowed} handleFollowBack={handleFollowBack}>
                <Link to={`/${currentUser.nickname}`} className={cx('avatarLink')}>
                    <Image
                        className={cx('avatar')}
                        alt={currentUser.first_name + ' ' + currentUser.last_name}
                        src={currentUser.avatar}
                    ></Image>
                </Link>
            </PreviewProfile>
            <div className={cx('body')}>
                <Link className={cx('profile-body')} to={'/huynhynhi18.06'}>
                    <h3 className={cx('user-name')}>{currentUser.nickname}</h3>
                    <h4 className={cx('name')}>{currentUser.first_name + ' ' + currentUser.last_name}</h4>
                </Link>
                <span className={cx('description')}>
                    {allData.description}...
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
                    <span className={cx('music-title')}>{allData.music || 'viral trend on Tiktok!'}</span>
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
