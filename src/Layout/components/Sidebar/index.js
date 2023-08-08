import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '../../../config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    FollowingIcon,
    LiveIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    LiveActiveIcon,
} from '../../../components/Icon/Icons';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            {
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
            }
        </aside>
    );
}

export default Sidebar;
