import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useEffect, useState } from 'react';
import {
    HomeIcon,
    FollowingIcon,
    LiveIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    LiveActiveIcon,
} from '../../../components/Icon/Icons';
import config from '../../../config';
import * as userServices from '../../../service/userService';
import Menu, { MenuItem } from './Menu';
import RecommendedAccounts from '../../../components/RecommendedAccount/RecommendedAccounts';
import Contact from './Contact/Contact';

// constant varables
const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const INIT_FOLLOWED_PAGE = 1;
const MAX_ACCOUNT_ITEM = 30;
const PER_PAGE = 5;
function Sidebar() {
    const [seeMore, setSeeMore] = useState(true);
    const [seeFollowedMore, setFollowedSeeMore] = useState(true);
    const [maxPage, setMaxPage] = useState([]);
    const [maxFollowedPage, setMaxFollowedPage] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const [followedPage, setFollowedPage] = useState(INIT_FOLLOWED_PAGE);
    const [rcmUsers, setRcmUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState([]);
    // function handle API
    const handleRcmAPI = () => {
        if (maxPage.length < MAX_ACCOUNT_ITEM) {
            userServices
                .getRecommendation(page, PER_PAGE)
                .then((response) => {
                    setMaxPage((prev) => [...prev, ...response.data]);
                    setRcmUsers((prevRcmUsers) => [...prevRcmUsers, ...response.data]);
                    if (maxPage.length === MAX_ACCOUNT_ITEM - PER_PAGE) {
                        setSeeMore(false);
                    }
                })
                .catch((error) => console.log(error));
        } else {
            setRcmUsers((prevUsers) => [...prevUsers, ...maxPage.slice(PER_PAGE, MAX_ACCOUNT_ITEM)]);
            setSeeMore(false);
        }
    };

    const handleFollowedAPI = () => {
        if (maxFollowedPage.length < MAX_ACCOUNT_ITEM) {
            userServices
                .getRecommendation(followedPage, PER_PAGE)
                .then((response) => {
                    setMaxFollowedPage((prev) => [...prev, ...response.data]);
                    setFollowedUsers((prevFollowedUsers) => [...prevFollowedUsers, ...response.data]);
                    if (maxFollowedPage.length === MAX_ACCOUNT_ITEM - PER_PAGE) {
                        setFollowedSeeMore(false);
                    }
                })
                .catch((error) => console.log(error));
        } else {
            setFollowedUsers((prevUsers) => [...prevUsers, ...maxFollowedPage.slice(PER_PAGE, MAX_ACCOUNT_ITEM)]);
            setFollowedSeeMore(false);
        }
    };

    const handleSeeMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleFollowedSeeMore = () => {
        setFollowedPage((prevPage) => prevPage + 1);
    };

    const handleSeeLess = () => {
        setRcmUsers(maxPage.slice(0, PER_PAGE));
        setSeeMore(true);
    };

    const handleFollowedSeeLess = () => {
        setFollowedUsers(maxFollowedPage.slice(0, PER_PAGE));
        setFollowedSeeMore(true);
    };

    // handle appearance for scrollbar
    const handleMouseEnter = (e) => {
        const sideBar = e.target.closest('#sidebar');
        sideBar.style.overflowY = 'auto';
    };

    const handleMouseLeave = (e) => {
        const sideBar = e.target.closest('#sidebar');
        sideBar.style.overflowY = 'hidden';
    };

    // useEffect
    useEffect(() => {
        handleRcmAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    useEffect(() => {
        handleFollowedAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [followedPage]);

    return (
        <aside id="sidebar" className={cx('wrapper')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.paths.home}
                    icon={<HomeIcon />}
                    activeicon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.paths.following}
                    icon={<FollowingIcon />}
                    activeicon={<FollowingActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Live"
                    to={config.paths.live}
                    icon={<LiveIcon />}
                    activeicon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>
            <RecommendedAccounts
                label="Suggested accounts"
                data={rcmUsers}
                onSeeMore={handleSeeMore}
                onSeeLess={handleSeeLess}
                isSeeMore={seeMore}
            ></RecommendedAccounts>
            <RecommendedAccounts
                label="Following accounts"
                data={followedUsers}
                onSeeMore={handleFollowedSeeMore}
                isSeeMore={seeFollowedMore}
                onSeeLess={handleFollowedSeeLess}
            ></RecommendedAccounts>
            <Contact></Contact>
        </aside>
    );
}

export default Sidebar;
