import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCloudArrowUp,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button';
import { Wrapper as PopperWrapper } from '../../../Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AccountItem from '../../../AcountItem';
import Menu from '../../../Popper/Menu';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

import { userMenu, menuItems } from '../../../../asset/data/headerData';
// import 'tippy.js/dist/tippy.css';
const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;
    const searchResults = [];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo"></img>
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload">
                                <button className={cx('upload-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('inbox-btn')}>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : menuItems}
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
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                alt="Quy Manh"
                                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t31.18172-1/27912912_170539290250638_198222727050295599_o.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8GuBKFVUPbEAX_YAv0Z&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAlwI5ciibgG8VcyErPgkDXq64Es9pj1VU5mh9rlQNbpQ&oe=64F34C9D"
                            ></img>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
