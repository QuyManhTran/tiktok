import classNames from 'classnames/bind';
import styles from './LoginForm.mudule.scss';
import WrapperForm from '../../../components/WrapperForm';
import Button from '../../../components/Button';
import {
    FacebookIcon,
    GoogleIcon,
    LineIcon,
    TelegramIcon,
    Twitter,
    UserIcon,
    WhatsAppIcon,
} from '../../../components/Icon/Icons';
const cx = classNames.bind(styles);
function LoginForm({ ...props }) {
    return (
        <WrapperForm
            headTitle="Login to Tiktok"
            footTitle={`Don't you have account?`}
            role="Sign up"
            privacy="Do you agree with our pirvacy in the term of using of Tiktok and confirming that you understood the policy of privacy of Tiktok"
            {...props}
        >
            <div className={cx('login-methods')}>
                <Button
                    leftIcon={<UserIcon className={cx('method-icon')}></UserIcon>}
                    className={cx('method-item')}
                    classIcon={cx('span-icon')}
                    classTitle={cx('span-title')}
                >
                    <span className={cx('text-method')}>Use phone number or email</span>
                </Button>
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
        </WrapperForm>
    );
}

export default LoginForm;
