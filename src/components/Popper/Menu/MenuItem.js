import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';
const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
    return (
        <Button
            className={cx('menu-item')}
            to={item.to}
            leftIcon={item.icon}
            onClick={onClick}
        >
            {item.title}
        </Button>
    );
}

export default MenuItem;
