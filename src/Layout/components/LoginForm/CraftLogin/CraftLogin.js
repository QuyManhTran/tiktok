import classNames from 'classnames/bind';
import styles from './CraftLogin.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CautionIcon, RotateIcon } from '../../../../components/Icon/Icons';
import { useDebounce } from '../../../../hooks';
import { validateCode, validateEmail } from '../../RegisterForm/VerifyInfor/Email/ValidateEmail';

const cx = classNames.bind(styles);
function CraftLogin() {
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);
    const [inputPassword, setInputPassword] = useState('');
    const [isErrorUserName, setIsErrorUserName] = useState(false);
    const [inputUserName, setInputUserName] = useState('');
    const [isUnPassed, setIsUnPassed] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const userNameDebounce = useDebounce(inputUserName, 500);
    const onFocusPassword = () => {
        if (isUnPassed) {
            setIsUnPassed(false);
        }
    };
    const onNext = () => {
        // call API

        //   const user = {
        //     username: inputUserName,
        //     password: inputPassword
        //   }

        //pass
        // unpass
        setIsSend(true);
        if (isErrorUserName) {
            setIsErrorUserName(false);
        }
        setTimeout(() => {
            setIsSend(false);
            setIsUnPassed(true);
        }, 2000);
    };

    useEffect(() => {
        let isError = validateCode.isCode(userNameDebounce) && !validateEmail.isEmail(userNameDebounce);
        if (userNameDebounce.length === 0) {
            isError = false;
        }

        if (isErrorUserName !== isError) {
            setIsErrorUserName(isError);
        }
    }, [userNameDebounce]);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Email or TikTok ID</p>
            <div className={cx('container-input')}>
                <input
                    className={cx('input-box', {
                        ['error-input']: isErrorUserName,
                    })}
                    spellCheck={false}
                    type="text"
                    placeholder="Email or TikTok ID"
                    value={inputUserName}
                    onChange={(e) => {
                        setInputUserName(e.target.value);
                    }}
                ></input>
            </div>

            <div
                className={cx('container-input', {
                    ['unpassed-border']: isUnPassed,
                })}
            >
                <input
                    className={cx('input-box', {
                        ['unpassed-validate']: isUnPassed,
                    })}
                    spellCheck={false}
                    type={isHiddenPassword ? 'password' : 'text'}
                    placeholder="Password"
                    value={inputPassword}
                    onChange={(e) => {
                        setInputPassword(e.target.value);
                    }}
                    onFocus={onFocusPassword}
                ></input>
                {isUnPassed && (
                    <div className={cx('caution-password')}>
                        <CautionIcon className={cx('caution-icon')}></CautionIcon>
                    </div>
                )}
                <div className={cx('wrapper-eye')} onClick={() => setIsHiddenPassword(!isHiddenPassword)}>
                    {!isHiddenPassword && <FontAwesomeIcon icon={faEye} className={cx('icon-eye')} />}
                    {isHiddenPassword && <FontAwesomeIcon icon={faEyeSlash} className={cx('icon-eye')} />}
                </div>
            </div>
            {isUnPassed && (
                <span className={cx('code-error')}>Username or password doesn't match our records. Try again.</span>
            )}

            <span className={cx('forgot-password')}>Forgot password?</span>
            <button
                className={cx('continue', {
                    active: inputUserName.length > 0 && inputPassword.length > 0,
                })}
                onClick={onNext}
            >
                {!isSend ? 'Login' : <RotateIcon className={cx('rotate-icon')}></RotateIcon>}
            </button>
        </div>
    );
}

export default CraftLogin;
