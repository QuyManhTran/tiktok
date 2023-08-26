import styles from './ShareLink.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
import {
    CopyLinkIcon,
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    LineIcon,
    LinkedlnIcon,
    SendIcon,
    TelegramIcon,
    Twitter,
    WhatsAppIcon,
} from '../Icon';

const cx = classNames.bind(styles);
export function ShareLink({
    embed,
    friend,
    facebook,
    whatsapp,
    copy,
    twitter,
    linkedln,
    telegram,
    email,
    line,
    all,
    children,
}) {
    return (
        <div className={cx('link-items')}>
            {(embed || all) && (
                <Button leftIcon={<EmbedIcon></EmbedIcon>} className={cx('link-item')}>
                    <span> Embed</span>
                </Button>
            )}
            {(friend || all) && (
                <Button leftIcon={<SendIcon></SendIcon>} className={cx('link-item')}>
                    <span>Send to friends</span>
                </Button>
            )}
            {(facebook || all) && (
                <Button leftIcon={<FacebookIcon></FacebookIcon>} className={cx('link-item')}>
                    <span>Share to Facebook</span>
                </Button>
            )}
            {(whatsapp || all) && (
                <Button leftIcon={<WhatsAppIcon></WhatsAppIcon>} className={cx('link-item')}>
                    <span>Share to WhatsApp</span>
                </Button>
            )}
            {(copy || all) && (
                <Button leftIcon={<CopyLinkIcon></CopyLinkIcon>} className={cx('link-item')}>
                    <span>Copy Link</span>
                </Button>
            )}

            {(twitter || all) && (
                <Button leftIcon={<Twitter></Twitter>} className={cx('link-item')}>
                    <span>Share to Twitter</span>
                </Button>
            )}
            {(linkedln || all) && (
                <Button leftIcon={<LinkedlnIcon></LinkedlnIcon>} className={cx('link-item')}>
                    <span>Share to Linkedln</span>
                </Button>
            )}
            {(telegram || all) && (
                <Button leftIcon={<TelegramIcon></TelegramIcon>} className={cx('link-item')}>
                    <span>Share to Telegram</span>
                </Button>
            )}
            {(email || all) && (
                <Button leftIcon={<EmailIcon></EmailIcon>} className={cx('link-item')}>
                    <span>Share to Email</span>
                </Button>
            )}
            {(line || all) && (
                <Button leftIcon={<LineIcon></LineIcon>} className={cx('link-item')}>
                    <span>Share to Line</span>
                </Button>
            )}
            {!all && children}
        </div>
    );
}

export default ShareLink;
