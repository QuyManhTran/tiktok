/* eslint-disable no-useless-computed-key */
import classNames from 'classnames/bind';
import styles from './SidebarSingleView.module.scss';
import Header from './Header';
import CommentItem from '../../../components/CommentItem/CommentItem';
import { allDay } from '../../../asset/data/formData';
import { AtIcon, Smile } from '../../../components/Icon';
import { useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { emojis } from '../../../asset/data/emojiData';
import { Wrapper } from '../../../components/Popper';

const cx = classNames.bind(styles);
function SidebarSingleView() {
    const [isComment, setIsComment] = useState(false);
    const [isFocusInput, setIsFocusInput] = useState(false);
    const [isClickEmoji, setIsClickEmoji] = useState(false);
    const [isEnterEmojis, setIsEnterEmojis] = useState(false);
    const inputRef = useRef();
    const onComment = (e) => {
        if (e.target.value.trim()) {
            if (!isComment) {
                setIsComment(true);
            }
        } else {
            setIsComment(false);
        }
    };

    const onPost = () => {
        alert(inputRef.current.value);
    };

    const onTag = () => {
        inputRef.current.value = inputRef.current.value + '@';
        setIsComment(true);
    };

    const onEmoji = () => {
        setIsClickEmoji(true);
        inputRef.current.focus();
    };

    const onSelectEmoji = (e) => {
        inputRef.current.value = inputRef.current.value + e.target.innerText;
        inputRef.current.focus();
        setIsComment(true);
        setIsClickEmoji(false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-comment')}>
                <Header></Header>

                <div className={cx('navbar-container')}>
                    <div className={cx('creator-video')}>Creator videos</div>
                    <div
                        className={cx('Comments', {
                            ['nav-bar_active']: true,
                        })}
                    >
                        Comments(1168)
                    </div>
                </div>
                {allDay.map((element, index) => (
                    <CommentItem key={index}></CommentItem>
                ))}
            </div>
            <div className={cx('user-comment')}>
                <div
                    className={cx('inner-comment', {
                        ['inner-active']: isFocusInput,
                    })}
                >
                    <div className={cx('comment-items')}>
                        <div className={cx('wrapper-input')}>
                            <input
                                ref={inputRef}
                                className={cx('comment-input')}
                                placeholder="Add comment"
                                spellCheck={false}
                                onChange={onComment}
                                onFocus={() => setIsFocusInput(true)}
                                onBlur={() => {
                                    if (!isEnterEmojis) {
                                        console.log('hello');
                                        setIsFocusInput(false);
                                        setIsClickEmoji(false);
                                    }
                                }}
                            ></input>
                        </div>
                        <Tippy content='"@"a user to tag them in your comments'>
                            <div className={cx('mention-btn')} onClick={onTag}>
                                <AtIcon></AtIcon>
                            </div>
                        </Tippy>
                        <Tippy content="click to add emojis">
                            <div
                                className={cx('mention-btn', {
                                    ['mention-btn__active']: isClickEmoji,
                                })}
                                onClick={onEmoji}
                            >
                                <Smile></Smile>
                            </div>
                        </Tippy>
                        {isClickEmoji && (
                            <Wrapper className={cx('wrapper-poper')}>
                                <div
                                    className={cx('wrapper-emojis')}
                                    onMouseEnter={() => setIsEnterEmojis(true)}
                                    onMouseLeave={() => setIsEnterEmojis(false)}
                                >
                                    {emojis.map((emoji, index) => {
                                        return (
                                            <span key={index} className={cx('emoji-icon')} onClick={onSelectEmoji}>
                                                {emoji}
                                            </span>
                                        );
                                    })}
                                </div>
                            </Wrapper>
                        )}
                    </div>
                </div>
                <span
                    className={cx('post-btn', {
                        active: isComment,
                    })}
                    onClick={onPost}
                >
                    Post
                </span>
            </div>
        </div>
    );
}

export default SidebarSingleView;
