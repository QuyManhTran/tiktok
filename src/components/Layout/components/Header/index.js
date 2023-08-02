import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Tippy from '@tippyjs/react/headless';
import AccountItem from '../../../AcountItem';
import Menu from '../../../Popper/Menu';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
// import 'tippy.js/dist/tippy.css';
const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;
    const searchResults = [];
    const menuItems = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            type: 'Language',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'EN',
                        title: 'English',
                        type: 'Language',
                    },
                    {
                        code: 'VI',
                        title: 'Viet Nam',
                        type: 'Language',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/Feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo"></img>
                </div>
                <Tippy
                    visible={searchResults.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false}></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <div>hello</div>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                            <Menu
                                items={menuItems}
                                onChange={(item, history) => {
                                    history = history.slice(0, 1);
                                    for (let i = 0; i < history[0].data.length; i++) {
                                        if (history[0].data[i].children) {
                                            if (item.type === history[0].data[i].type) {
                                                history[0].data[i].title = item.title;
                                            }
                                        }
                                    }
                                    return history;
                                }}
                            >
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
