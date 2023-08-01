import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import AccountItem from '../../../AcountItem';
// import 'tippy.js/dist/tippy.css';
const cx = classNames.bind(styles);
function Header() {
    const searchResults = [];
    // const [searchResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResults([1, 2, 3]);
    //     }, 1000);
    // }, []);

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
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
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
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        ></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button
                        primary
                        // rightIcon={
                        //     <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                        // }
                    >
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
