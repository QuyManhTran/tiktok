import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
    return (
        <Button
            className={cx('menu-item', {
                separate: item.separate,
            })}
            to={item.to}
            leftIcon={item.icon}
            onClick={onClick}
        >
            {item.title}
        </Button>
    );
}

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default MenuItem;
