import classNames from 'classnames/bind';
import styles from './RecommendedAccounts.module.scss';
import PropTypes from 'prop-types';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <div className={cx('account-item')}>
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
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
