import classNames from 'classnames/bind';
import styles from './RecommendedAccounts.module.scss';
import PropTypes from 'prop-types';
import Image from '../Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PreviewProfile from '../PreviewProfile/PreviewProfile';
const cx = classNames.bind(styles);
function AccountItem({ user }) {
    return (
        <div>
            <PreviewProfile user={user}>
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
            </PreviewProfile>
        </div>
    );
}

AccountItem.propTypes = {
    user: PropTypes.object,
};
export default AccountItem;
