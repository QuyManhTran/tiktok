import classNames from 'classnames/bind';
import styles from './ActionItems.module.scss';
import Tippy from '@tippyjs/react/headless';
import ActionItem from '../../ActionItem';
import { Wrapper as WrapperShareLink } from '../../Popper';
import { HeartIcon, CommentIcon, ShareIcon, FavoriteIcon } from '../../Icon/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { connect } from 'react-redux';
import defaultDispatchs from '../../../store/actions/defaultDispatch';
import ShareLink from '../../ShareLink';

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
                <WrapperShareLink>
                    <ShareLink embed friend facebook whatsapp twitter all={isShowAll}>
                        <div className={cx('link-item')} onClick={onShowAll}>
                            <FontAwesomeIcon icon={faAngleDown} className={cx('down-icon')} />
                        </div>
                    </ShareLink>
                    <div
                        className={cx('arrow-down', {
                            // eslint-disable-next-line no-useless-computed-key
                            ['arrow-down']: !isShowAll,
                        })}
                    ></div>
                </WrapperShareLink>
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
