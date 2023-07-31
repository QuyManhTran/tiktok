import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2ee29dd59f8fbb6c46bca00e40ed129e~c5_100x100.jpeg?x-expires=1690966800&x-signature=LXa8BC3jjg1tOrCiZvuRBM2fFdI%3D"
                alt="y nhi"
            ></img>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Huynh Tran Y Nhi</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCircleCheck}
                    />
                </h4>
                <span className={cx('username')}>MissWorld VietNam</span>
            </div>
        </div>
    );
}

export default AccountItem;
