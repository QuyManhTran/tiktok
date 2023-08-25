import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function AccountItem({ data: user, big }) {
    return (
        <Link
            to={`/@${user.nickname}`}
            className={cx('wrapper', {
                // eslint-disable-next-line no-useless-computed-key
                ['wrapper-big']: big,
            })}
        >
            <Image className={cx('avatar')} src={user.avatar} alt={user.full_name}></Image>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{user.full_name}</span>
                    {user.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('username')}>{user.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
