import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Menu from '../../../Popper/Menu';

import { userMenu, menuItems } from '../../../../asset/data/headerData';
import { InboxIcon, UploadIcon } from '../../../Icon';
import Image from '../../../Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import pathConfigs from '../../../../config/path';
const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={pathConfigs.home}>
                    <img src={images.logo} className={cx('logo')} alt="logo"></img>
                </Link>
                <Search></Search>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy offset={[0, 0]} content="Upload">
                                <button className={cx('upload-btn')}>
                                    <UploadIcon></UploadIcon>
                                </button>
                            </Tippy>
                            <Tippy offset={[0, 0]} content="Inbox">
                                <button className={cx('inbox-btn')}>
                                    <InboxIcon />
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
                            <Image
                                className={cx('user-avatar')}
                                alt="Quy Manh"
                                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t31.18172-1/27912912_170539290250638_198222727050295599_o.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8GuBKFVUPbEAX_YAv0Z&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAlwI5ciibgG8VcyErPgkDXq64Es9pj1VU5mh9rlQNbpQ&oe=64F34C9D"
                                fallBack="https://yt3.ggpht.com/oczXp1Jyb578EwdXjJohkrvPZcT55B-AQPGjt_hbU6Z8xMSlBlr028uqr1vfZDrFrfwisp2BtQ=s88-c-k-c0x00ffffff-no-rj"
                            ></Image>
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
