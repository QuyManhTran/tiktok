import classNames from 'classnames/bind';
import styles from './ActionItems.module.scss';
import Tippy from '@tippyjs/react/headless';
import ActionItem from '../../ActionItem';
import { Wrapper as ShareLink } from '../../Popper';
import {
    HeartIcon,
    CommentIcon,
    ShareIcon,
    FavoriteIcon,
    Twitter,
    LineIcon,
    TelegramIcon,
    EmailIcon,
    LinkedlnIcon,
} from '../../Icon/Icons';
import Button from '../../Button';
import { EmbedIcon, SendIcon, WhatsAppIcon, CopyLinkIcon, FacebookIcon } from '../../Icon/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { connect } from 'react-redux';
import defaultDispatchs from '../../../store/actions/defaultDispatch';

const cx = classNames.bind(styles);
function ActionItems({ data, ...props }) {
    const [isShowAll, setIsShowAll] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [allData, setAllData] = useState(data);
    const onShowAll = () => {
        setIsShowAll(!isShowAll);
    };
    const onHiddenAll = () => {
        setIsShowAll(false);
    };
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
                        {/* {hidden item} */}

                        {isShowAll && (
                            <>
                                <Button leftIcon={<Twitter></Twitter>} className={cx('link-item')}>
                                    <span>Share to Twitter</span>
                                </Button>
                                <Button leftIcon={<LinkedlnIcon></LinkedlnIcon>} className={cx('link-item')}>
                                    <span>Share to Linkedln</span>
                                </Button>
                                <Button leftIcon={<TelegramIcon></TelegramIcon>} className={cx('link-item')}>
                                    <span>Share to Telegram</span>
                                </Button>
                                <Button leftIcon={<EmailIcon></EmailIcon>} className={cx('link-item')}>
                                    <span>Share to Email</span>
                                </Button>
                                <Button leftIcon={<LineIcon></LineIcon>} className={cx('link-item')}>
                                    <span>Share to Line</span>
                                </Button>
                            </>
                        )}
                        {!isShowAll && (
                            <div className={cx('link-item')} style={{ padding: '0px 8px' }} onClick={onShowAll}>
                                <FontAwesomeIcon icon={faAngleDown} className={cx('down-icon')} />
                            </div>
                        )}
                    </div>
                    <div
                        className={cx('arrow-nothing', {
                            // eslint-disable-next-line no-useless-computed-key
                            ['arrow-down']: !isShowAll,
                        })}
                    ></div>
                </ShareLink>
            </div>
        );
    };
    return (
        <div className={cx('wrapper')}>
            <ActionItem
                icon={<HeartIcon></HeartIcon>}
                active={cx('red-active')}
                isLogin={props.isLogin}
                openModal={props.openModal}
            >
                {allData.likes_count}
            </ActionItem>
            <ActionItem icon={<CommentIcon></CommentIcon>} isLogin={props.isLogin} openModal={props.openModal}>
                {allData.comments_count}
            </ActionItem>
            <ActionItem
                icon={<FavoriteIcon></FavoriteIcon>}
                active={cx('yellow-active')}
                isLogin={props.isLogin}
                openModal={props.openModal}
            >
                {allData.views_count}
            </ActionItem>
            <Tippy
                interactive
                placement="top-start"
                offset={[-16, 4]}
                delay={[0, 400]}
                render={sharingLink}
                onHidden={onHiddenAll}
            >
                <div>
                    <ActionItem icon={<ShareIcon></ShareIcon>} isLogin={props.isLogin} openModal={props.openModal}>
                        {allData.shares_count}
                    </ActionItem>
                </div>
            </Tippy>
        </div>
    );
}
const mapStateToProps = (state) => {
    return { isLogin: state.isLogin, isModal: state.isModal };
};

const mapDispatchToProps = defaultDispatchs;
export default connect(mapStateToProps, mapDispatchToProps)(ActionItems);
