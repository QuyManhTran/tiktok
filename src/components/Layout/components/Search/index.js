import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AcountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../../../hooks';
const cx = classNames.bind(styles);

function Search() {
    const [searchText, setSearchText] = useState('');
    const [resultDisplay, setResultDisplay] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchText, 400);
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResults([]);
            return;
        }
        if (debounce !== '') {
            setLoading(true);
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchText)}&type=less`)
                .then((res) => {
                    setLoading(false);
                    return res.json();
                })
                .then((res) => {
                    setSearchResults(res.data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        } else {
            setSearchResults([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce]);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchText('');
        setSearchResults([]);
        inputRef.current.focus();
    };
    const handleOutSideResults = () => {
        setResultDisplay(false);
    };
    return (
        <HeadlessTippy
            visible={resultDisplay && searchResults.length > 0}
            interactive
            placement="bottom-end"
            onClickOutside={handleOutSideResults}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResults.map((user) => (
                            <AccountItem key={user.id} data={user}></AccountItem>
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setResultDisplay(true)}
                ></input>
                {!!searchText && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
