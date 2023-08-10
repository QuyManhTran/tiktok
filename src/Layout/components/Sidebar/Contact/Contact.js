import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <a className={cx('header-item')} href="/">
                    About
                </a>
                <a className={cx('header-item')} href="/">
                    Newsroom
                </a>
                <a className={cx('header-item')} href="/">
                    Contact
                </a>
                <a className={cx('header-item')} href="/">
                    Careers
                </a>
            </div>

            <div className={cx('body')}>
                <div className={cx('service')}>
                    <a className={cx('service-item')} href="/">
                        TikTok for Good
                    </a>
                    <a className={cx('service-item')} href="/">
                        Advertise
                    </a>
                </div>
                <div className={cx('service')}>
                    <a className={cx('service-item')} href="/">
                        Developers
                    </a>
                    <a className={cx('service-item')} href="/">
                        Transparency
                    </a>
                </div>
                <div className={cx('service')}>
                    <a className={cx('service-item')} href="/">
                        TikTok Rewards
                    </a>
                    <a className={cx('service-item')} href="/">
                        Tiktok Embeds
                    </a>
                </div>
            </div>

            <div className={cx('footer')}>
                <a className={cx('footer-item')} href="/">
                    Helps
                </a>
                <a className={cx('footer-item')} href="/">
                    Safety
                </a>
                <a className={cx('footer-item')} href="/">
                    Terms
                </a>
                <a className={cx('footer-item')} href="/">
                    Privacy
                </a>
            </div>

            <span className={cx('copyright')}>© 2023 TikTok</span>
        </div>
    );
}

export default Contact;
