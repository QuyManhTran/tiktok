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
const cx = classNames.bind(styles);
function AccountItem({ data }) {
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
                                alt="y nhi"
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2ee29dd59f8fbb6c46bca00e40ed129e~c5_100x100.jpeg?x-expires=1691744400&x-signature=ft40umePJTb107XBsb46u1ak%2FBo%3D"
                            ></Image>
                            <Button primary to={'/huynhtranynhi.1806'} className={cx('follow-btn')}>
                                Follow
                            </Button>
                        </header>
                        <div className={cx('body-preview')}>
                            <p
                                className={cx('user-name', {
                                    [cx('user-name-preview')]: true,
                                })}
                            >
                                <strong>huynhtranynhi.1806</strong>
                                <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')}></FontAwesomeIcon>
                            </p>
                            <p className={cx('name')}>Huỳnh Trần Ý Nhi</p>
                        </div>
                        <footer className={cx('footer-preview')}>
                            <p className={cx('analytics')}>
                                <span className={cx('followers')}>
                                    <strong className={cx('amount')}>128K</strong>
                                    <strong className={cx('title')}>Followers</strong>
                                </span>
                                <span className={cx('likes')}>
                                    <strong className={cx('amount')}>645M</strong>
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
        <Tippy interactive offset={[-15, 5]} delay={[400, 200]} placement="bottom-start" render={renderPreview}>
            <Link to={'/huynhtranynhi.1806'} className={cx('account-item')}>
                <Image
                    className={cx('avatar')}
                    alt="y nhi"
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2ee29dd59f8fbb6c46bca00e40ed129e~c5_100x100.jpeg?x-expires=1691744400&x-signature=ft40umePJTb107XBsb46u1ak%2FBo%3D"
                ></Image>
                <div className={cx('infor')}>
                    <p className={cx('user-name')}>
                        <strong>huynhtranynhi.1806</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')}></FontAwesomeIcon>
                    </p>
                    <p className={cx('name')}>Huỳnh Trần Ý Nhi</p>
                </div>
            </Link>
        </Tippy>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};
export default AccountItem;
