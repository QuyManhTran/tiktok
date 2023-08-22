import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import { connect } from 'react-redux';
import defaultDispatchs from '../../../store/actions/defaultDispatch';

const cx = classNames.bind(styles);
function Menu({ children, items, onChange = () => {}, ...props }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    if (JSON.stringify(items) !== JSON.stringify(history[0].data)) {
        setHistory([{ data: items }]);
    }
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    item={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((preHistory) => [...preHistory, item.children]);
                        } else {
                            setHistory(onChange(item, history));
                        }
                        if (index === current.data.length - 1) {
                            props.onLogOut();
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    return (
        <Tippy
            delay={[0, 700]}
            onHide={() => {
                setHistory((preHistory) => preHistory.slice(0, 1));
            }}
            hideOnClick={false}
            offset={[12, 10]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <HeaderMenu
                                title={current.title}
                                onBack={() => {
                                    setHistory((preHistory) => preHistory.slice(0, preHistory.length - 1));
                                }}
                            ></HeaderMenu>
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
const mapDispatchToProps = defaultDispatchs;
export default connect(null, mapDispatchToProps)(Menu);
