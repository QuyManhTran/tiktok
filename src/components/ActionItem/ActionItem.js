import classNames from 'classnames/bind';
import styles from './ActionItem.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
function ActionItem({ children, icon, active, className, isLogin, openModal }) {
    const [isActive, setIsActive] = useState(false);
    const handleActive = (e) => {
        if (isLogin) {
            if (active) {
                setIsActive(!isActive);
            }
        } else {
            if (openModal) {
                openModal();
            }
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('icon', {
                    [className]: className,
                })}
                onClick={handleActive}
            >
                <div
                    className={cx('wrapper-icon', {
                        [active]: isActive,
                    })}
                >
                    {icon}
                </div>
            </div>
            <span className={cx('analystic')}>{children}</span>
        </div>
    );
}
export default ActionItem;
