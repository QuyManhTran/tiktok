import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
const cx = classNames.bind(styles);
function AccountItem({ data: user }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={user.avatar} alt={user.full_name}></Image>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{user.full_name}</span>
                    {user.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('username')}>{user.nickname}</span>
            </div>
        </div>
    );
}

export default AccountItem;
