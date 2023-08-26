/* eslint-disable no-useless-computed-key */
import classNames from 'classnames/bind';
import styles from './Option.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as OptionWrapper } from '../Popper';
import Button from '../Button';
import { BrokenHeartIcon, ReportIcon } from '../Icon';
const cx = classNames.bind(styles);
function Option({ big = false, black = false, report, ...props }) {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <OptionWrapper
                    className={cx('wrapper-option', {
                        ['wrapper-big']: big,
                    })}
                >
                    <div
                        className={cx('video-view', {
                            ['video-view-big']: big,
                        })}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    >
                        {!report && (
                            <Button
                                className={cx('not-interested', {
                                    ['option-btn-big']: big,
                                })}
                                leftIcon={<BrokenHeartIcon></BrokenHeartIcon>}
                            >
                                Not interested
                            </Button>
                        )}

                        <Button
                            className={cx('report', {
                                ['option-btn-big']: big,
                            })}
                            leftIcon={<ReportIcon></ReportIcon>}
                        >
                            Report
                        </Button>
                    </div>
                </OptionWrapper>
            </div>
        );
    };
    return (
        <Tippy
            interactive
            offset={big || report ? [0, 12] : [20, 30]}
            delay={[0, 200]}
            placement={big || report ? 'bottom-start' : 'right-start'}
            render={renderPreview}
            onMount={props.onMountTippy}
            onHidden={props.onHiddenTippy}
        >
            <div
                className={cx('option-controller', {
                    ['option-big']: big,
                    ['option-comment']: black,
                })}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                <FontAwesomeIcon icon={faEllipsisH} />
            </div>
        </Tippy>
    );
}
export default Option;
