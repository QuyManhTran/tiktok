import classNames from 'classnames/bind';
import styles from './WrapperForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function WrapperForm({
    headTitle = 'Login to Tiktok',
    footTitle = `Don't you have account?`,
    role = 'Sign up',
    privacy = 'Do you agree with our pirvacy in the term of using of Tiktok and confirming that you understood the policy of privacy of Tiktok',
    children = 'body',
    onChangeMethod = () => alert('Error'),
    onRemoveModal = () => alert('Error'),
}) {
    return (
        <div className={cx('wrapper')} onClick={(e) => e.stopPropagation()}>
            <div className={cx('inner-form')}>
                <header className={cx('header')}>
                    <h2 className={cx('head-title')}>{headTitle}</h2>
                    <button className={cx('clear')} onClick={onRemoveModal}>
                        <FontAwesomeIcon icon={faX} className={cx('clear-icon')}></FontAwesomeIcon>
                    </button>
                    <div className={cx('body')}>{children}</div>
                </header>
                <footer className={cx('footer')}>
                    <p className={cx('policy')}>{privacy}</p>
                    <div className={cx('advice')}>
                        <span className={cx('foot-title')}>{footTitle}</span>
                        <button className={cx('role')} onClick={onChangeMethod}>
                            {role}
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default WrapperForm;
