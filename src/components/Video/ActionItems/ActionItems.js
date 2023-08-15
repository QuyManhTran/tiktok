import classNames from 'classnames/bind';
import styles from './ActionItems.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as ShareLink } from '../../Popper';
import ActionItem from '../../ActionItem';
import { HeartIcon, CommentIcon, ShareIcon, FavoriteIcon } from '../../Icon/Icons';
const cx = classNames.bind(styles);
function ActionItems() {
    const sharingLink = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <ShareLink>content</ShareLink>
            </div>
        );
    };
    return (
        <div className={cx('wrapper')}>
            <ActionItem icon={<HeartIcon></HeartIcon>} active={cx('red-active')}>
                841.4K
            </ActionItem>
            <ActionItem icon={<CommentIcon></CommentIcon>}>18.8K</ActionItem>
            <ActionItem icon={<FavoriteIcon></FavoriteIcon>} active={cx('yellow-active')}>
                92.8K
            </ActionItem>
            <Tippy interactive placement="bottom-end" render={sharingLink}>
                <div>
                    <ActionItem icon={<ShareIcon></ShareIcon>}>39.1K</ActionItem>
                </div>
            </Tippy>
        </div>
    );
}

export default ActionItems;
