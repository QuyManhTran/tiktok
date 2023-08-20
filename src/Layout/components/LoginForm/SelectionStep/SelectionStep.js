import classNames from 'classnames/bind';
import styles from './SelectionStep.module.scss';
import Button from '../../../../components/Button';
import QRScan from '../QRScan/QRScan';
import {
    FacebookIcon,
    GoogleIcon,
    LineIcon,
    QRIcon,
    TelegramIcon,
    Twitter,
    UserIcon,
    WhatsAppIcon,
} from '../../../../components/Icon/Icons';
import CraftLogin from '../CraftLogin/CraftLogin';

const cx = classNames.bind(styles);
function SelectionStep({ onChangeStep }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('select-login')} onClick={() => onChangeStep(QRScan)}>
                <Button
                    leftIcon={<QRIcon className={cx('method-icon')}></QRIcon>}
                    className={cx('method-item')}
                    classIcon={cx('span-icon')}
                    classTitle={cx('span-title')}
                >
                    <span className={cx('text-method')}>Use QR code</span>
                </Button>
            </div>

            <div className={cx('select-login')} onClick={() => onChangeStep(CraftLogin)}>
                <Button
                    leftIcon={<UserIcon className={cx('method-icon')}></UserIcon>}
                    className={cx('method-item')}
                    classIcon={cx('span-icon')}
                    classTitle={cx('span-title')}
                >
                    <span className={cx('text-method')}>Phone number / Email / TikTok ID</span>
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
        </div>
    );
}

export default SelectionStep;
