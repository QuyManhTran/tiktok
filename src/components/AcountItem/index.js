import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItem({ data: user }) {
    return (
        <Link to={`/@${user.nickname}`} className={cx('wrapper')}>
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

export default AccountItem;
