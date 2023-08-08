import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function HeaderMenu({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon className={cx('back-icon')} icon={faAngleLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

HeaderMenu.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default HeaderMenu;
