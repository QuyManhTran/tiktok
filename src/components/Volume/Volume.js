import classNames from 'classnames/bind';
import styles from './Volume.module.scss';
import Tippy from '@tippyjs/react/headless';
import homeDispatchs from '../../store/actions/homeDispatchs';
import { connect } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { VolumeIcon, XmarkVolume } from '../Icon';

const cx = classNames.bind(styles);
function Volume({ big = false, ...props }) {
    const volumeBar = useRef();
    const volumeSlider = useRef();

    const volumeData = props.volumeData;
    const isAutoMute = volumeData.isAutoMute;
    const syncVolume = volumeData.syncVolume;
    const prevSyncVolume = volumeData.prevSyncVolume;
    const onGlobalMute = props.onGlobalMute;
    const onGlobalVolume = props.onGlobalVolume;
    const onGlobalPrevVolume = props.onGlobalPrevVolume;
    const [volumeValue, setVolumeValue] = useState(syncVolume);

    const handleVolumeUp = (e) => {
        const elementRect = e.target.getBoundingClientRect();
        const currentPosY = e.clientY;
        let currentPercent = (elementRect.height - currentPosY + elementRect.y) / elementRect.height;
        if (currentPercent < 0.1) {
            currentPercent = 0;
            onGlobalPrevVolume(syncVolume);
            onGlobalMute(true);
        } else {
            currentPercent = currentPercent.toFixed(1);
            if (isAutoMute) {
                onGlobalMute(false);
            }
        }
        setVolumeValue(currentPercent);
        onGlobalVolume(currentPercent);
    };

    const handleMute = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isAutoMute) {
            setVolumeValue(prevSyncVolume);
            onGlobalVolume(prevSyncVolume);
        } else {
            onGlobalPrevVolume(syncVolume);
            setVolumeValue(0);
            onGlobalVolume(0);
        }
        onGlobalMute(!isAutoMute);
    };

    useEffect(() => {
        if (volumeBar.current) {
            volumeBar.current.style.height = `${syncVolume * 100}%`;
        }
        if (volumeSlider.current) {
            volumeSlider.current.style.top = `${(1 - syncVolume) * 80}%`;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [volumeValue]);

    const renderVolumeController = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <div
                    className={cx('adjust-volume', {
                        ['tippy-big']: big,
                    })}
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                >
                    <div className={cx('wrapper-volume')} onMouseUp={handleVolumeUp}>
                        <div
                            className={cx('volume-bar')}
                            ref={volumeBar}
                            style={{ height: `${syncVolume * 100}%` }}
                        ></div>
                        <div
                            className={cx('volume-slider')}
                            ref={volumeSlider}
                            style={{ top: `${(1 - syncVolume) * 80}%` }}
                            onMouseUp={(e) => e.stopPropagation()}
                        ></div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div onClick={(e) => e.preventDefault()}>
            <Tippy
                interactive
                offset={[4, 12]}
                delay={[0, 100]}
                placement="right-start"
                render={renderVolumeController}
                hideOnClick={false}
            >
                <div
                    className={cx('volume-controller', {
                        ['volume-big']: big,
                    })}
                    onClick={handleMute}
                >
                    {!isAutoMute && <VolumeIcon className={cx('volume-on')}></VolumeIcon>}
                    {isAutoMute && <XmarkVolume className={cx('volume-off')}></XmarkVolume>}
                </div>
            </Tippy>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        volumeData: {
            isAutoMute: state.isAutoMute,
            syncVolume: state.syncVolume,
            prevSyncVolume: state.prevSyncVolume,
        },
    };
};

const mapDispatchToProps = homeDispatchs;
export default connect(mapStateToProps, mapDispatchToProps)(Volume);
