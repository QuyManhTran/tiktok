import classNames from 'classnames/bind';
import styles from './RecommendedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function RecommendedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <p className={cx('see-more')}>See more</p>
        </div>
    );
}

RecommendedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default RecommendedAccounts;
