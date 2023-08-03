import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, items, onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
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
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
