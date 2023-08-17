import classNames from 'classnames/bind';
import styles from './SelectionStep.module.scss';
import { Fragment } from 'react';
import Button from '../../../../components/Button';
import {
    FacebookIcon,
    GoogleIcon,
    LineIcon,
    TelegramIcon,
    Twitter,
    UserIcon,
    WhatsAppIcon,
} from '../../../../components/Icon/Icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import VerifyInfor from '../VerifyInfor/VerifyInfor';
const cx = classNames.bind(styles);
function SelectionStep({ onChangeStep }) {
    const [isSeeAll, setIsSeeAll] = useState(false);
    const onSeeAll = () => {
        setIsSeeAll(!isSeeAll);
    };
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('select-register')}
                onClick={(e) => {
                    e.stopPropagation();
                    onChangeStep(VerifyInfor);
                }}
            >
                <Button
                    leftIcon={<UserIcon className={cx('method-icon')}></UserIcon>}
                    className={cx('method-item')}
                    classIcon={cx('span-icon')}
                    classTitle={cx('span-title')}
                >
                    <span className={cx('text-method')}>Use phone number or email</span>
                </Button>
            </div>
            <Button
                leftIcon={<FacebookIcon className={cx('method-icon')}></FacebookIcon>}
                className={cx('method-item')}
                classIcon={cx('span-icon')}
                classTitle={cx('span-title')}
            >
                <span className={cx('text-method')}>Continue with Facebook</span>
            </Button>
            <Button
                leftIcon={<GoogleIcon className={cx('method-icon')}></GoogleIcon>}
                className={cx('method-item')}
                classIcon={cx('span-icon')}
                classTitle={cx('span-title')}
            >
                <span className={cx('text-method')}>Continue with Google</span>
            </Button>
            {!isSeeAll && (
                <FontAwesomeIcon icon={faAngleDown} className={cx('angle-down')} onClick={onSeeAll}></FontAwesomeIcon>
            )}
            {isSeeAll && (
                <>
                    <Button
                        leftIcon={<Twitter className={cx('method-icon')}></Twitter>}
                        className={cx('method-item')}
                        classIcon={cx('span-icon')}
                        classTitle={cx('span-title')}
                    >
                        <span className={cx('text-method')}>Continue with Twitter</span>
                    </Button>
                    <Button
                        leftIcon={<WhatsAppIcon className={cx('method-icon')}></WhatsAppIcon>}
                        className={cx('method-item')}
                        classIcon={cx('span-icon')}
                        classTitle={cx('span-title')}
                    >
                        <span className={cx('text-method')}>Continue with WhatsApp</span>
                    </Button>
                    <Button
                        leftIcon={<TelegramIcon className={cx('method-icon')}></TelegramIcon>}
                        className={cx('method-item')}
                        classIcon={cx('span-icon')}
                        classTitle={cx('span-title')}
                    >
                        <span className={cx('text-method')}>Continue with Telegram</span>
                    </Button>

                    <Button
                        leftIcon={<LineIcon className={cx('method-icon')}></LineIcon>}
                        className={cx('method-item')}
                        classIcon={cx('span-icon')}
                        classTitle={cx('span-title')}
                    >
                        <span className={cx('text-method')}>Continue with LINE</span>
                    </Button>
                </>
            )}
        </div>
    );
}

export default SelectionStep;
