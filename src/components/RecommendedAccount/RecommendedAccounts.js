import classNames from 'classnames/bind';
import styles from './RecommendedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function RecommendedAccounts({ label, data, following }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data &&
                data.map((user, index) => <AccountItem key={index} user={user} following={following}></AccountItem>)}
            <p className={cx('see-more')}>See more</p>
        </div>
    );
}

RecommendedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default RecommendedAccounts;
