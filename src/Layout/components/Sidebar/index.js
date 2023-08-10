import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '../../../config';
import * as userServices from '../../../service/userService';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    FollowingIcon,
    LiveIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    LiveActiveIcon,
} from '../../../components/Icon/Icons';
import { useEffect, useLayoutEffect, useState } from 'react';
import RecommendedAccounts from '../../../components/RecommendedAccount/RecommendedAccounts';
const cx = classNames.bind(styles);
function Sidebar() {
    const [rcmUsers, setRcmUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState([]);
    const handleRcmAPI = () => {
        const page = 1;
        const per_page = 5;
        userServices
            .getRecommendation(page, per_page)
            .then((response) => setRcmUsers(response.data))
            .catch((error) => console.log(error));
    };
    const handleFollowedAPI = () => {
        const page = 2;
        const per_page = 5;
        userServices
            .getRecommendation(page, per_page)
            .then((response) => setFollowedUsers(response.data))
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        handleRcmAPI();
        handleFollowedAPI();
    }, []);
    return (
        <aside className={cx('wrapper')}>
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
            <RecommendedAccounts label="Suggested accounts" data={rcmUsers} following={false}></RecommendedAccounts>
            <RecommendedAccounts label="Following accounts" data={followedUsers} following={true}></RecommendedAccounts>
        </aside>
    );
}

export default Sidebar;
