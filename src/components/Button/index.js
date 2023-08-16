import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    leftIcon,
    rightIcon,
    text = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    rounded = false,
    following = false,
    className,
    classIcon,
    classTitle,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    return (
        <Comp
            className={cx('wrapper', {
                [className]: className,
                text,
                primary: primary,
                outline,
                small,
                large,
                disabled,
                rounded,
                following,
            })}
            {...props}
        >
            {leftIcon && (
                <span
                    className={cx('icon', {
                        [classIcon]: classIcon,
                    })}
                >
                    {leftIcon}
                </span>
            )}
            <span
                className={cx('title', {
                    [classTitle]: classTitle,
                })}
            >
                {children}
            </span>
            {rightIcon && (
                <span
                    className={cx('icon', {
                        [classIcon]: classIcon,
                    })}
                >
                    {rightIcon}
                </span>
            )}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
