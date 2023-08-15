import classNames from 'classnames/bind';
import styles from './ActionItems.module.scss';
import Tippy from '@tippyjs/react/headless';
import ActionItem from '../../ActionItem';
import { Wrapper as ShareLink } from '../../Popper';
import { HeartIcon, CommentIcon, ShareIcon, FavoriteIcon } from '../../Icon/Icons';
import Button from '../../Button';
import { EmbedIcon, SendIcon, WhatsAppIcon, CopyLinkIcon, FacebookIcon } from '../../Icon/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function ActionItems() {
    const sharingLink = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <ShareLink>
                    <div className={cx('link-items')}>
                        <Button leftIcon={<EmbedIcon></EmbedIcon>} className={cx('link-item')}>
                            <span> Embed</span>
                        </Button>
                        <Button leftIcon={<SendIcon></SendIcon>} className={cx('link-item')}>
                            <span>Send to friends</span>
                        </Button>
                        <Button leftIcon={<FacebookIcon></FacebookIcon>} className={cx('link-item')}>
                            <span>Share to Facebook</span>
                        </Button>
                        <Button leftIcon={<WhatsAppIcon></WhatsAppIcon>} className={cx('link-item')}>
                            <span>Share to WhatsApp</span>
                        </Button>
                        <Button leftIcon={<CopyLinkIcon></CopyLinkIcon>} className={cx('link-item')}>
                            <span>Copy Link</span>
                        </Button>
                        <div className={cx('link-item')}>
                            <FontAwesomeIcon icon={faAngleDown} className={cx('down-icon')} />
                        </div>
                    </div>
                </ShareLink>
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
            <Tippy interactive placement="top-start" offset={[-16, 0]} render={sharingLink}>
                <div>
                    <ActionItem icon={<ShareIcon></ShareIcon>}>39.1K</ActionItem>
                </div>
            </Tippy>
        </div>
    );
}

export default ActionItems;
