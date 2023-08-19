import classNames from 'classnames/bind';
import styles from './Email.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../../../../hooks';
import { validatePassword } from './ValidateEmail';

const cx = classNames.bind(styles);
const delay = 500;
const maxCodeLength = 6;
function Email({ isClickAll }) {
    const passwordRef = useRef();
    const [isChecked, setIsChecked] = useState(false);
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);
    const [isErrorCode, setIsErrorCode] = useState(false);
    const [inputCode, setInputCode] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [isEnoughLengthPass, setIsEnoughLengthPass] = useState(false);
    const [isEnoughCharacterPass, setIsEnoughCharacterPass] = useState(false);
    const [isFocusPassword, setIsFocusPassword] = useState(false);
    const [isFocusCode, setIsFocusCode] = useState(false);

    //handle check delay
    const codeDebounce = useDebounce(inputCode, delay);
    const passwordDebounce = useDebounce(inputPassword, delay);
    // function handle
    const isContainAlphabet = (text) => {
        return /[a-zA-Z]/.test(text);
    };

    const onClickCheck = (e) => {
        setIsChecked(!isChecked);
    };

    const onBlurPassword = () => {
        setIsFocusPassword(false);
        if (passwordDebounce.length > 0) {
            const isError = !isEnoughLengthPass || !isEnoughCharacterPass;
            if (isError !== isErrorPassword) {
                setIsErrorPassword(isError);
            }
        } else {
            setIsErrorPassword(false);
        }
    };

    const onBlurCode = () => {
        setIsFocusCode(false);
    };

    // UseEffect
    useEffect(() => {
        const isError =
            isContainAlphabet(codeDebounce) || (codeDebounce.length !== maxCodeLength && codeDebounce.length > 0);
        setIsErrorCode(isError);
    }, [codeDebounce]);

    useEffect(() => {
        const isEnoughLength = validatePassword.isEnoughLength(passwordDebounce);
        const isEnoughCharacter = validatePassword.isEnoughCharacter(passwordDebounce);
        if (isEnoughLength !== isEnoughLengthPass) {
            setIsEnoughLengthPass(isEnoughLength);
        }
        if (isEnoughCharacter !== isEnoughCharacterPass) {
            setIsEnoughCharacterPass(isEnoughCharacter);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [passwordDebounce]);

    useEffect(() => {}, [isErrorPassword]);

    // Call API
    const onSendCode = () => {
        // send email
        // if (isClickAll && !isErrorPhoneNumber && phoneDebounce) {
        //     alert('send phone number');
        // }
    };

    const onNext = () => {
        alert('next');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                Email
                <span className={cx('link-email')}>Register via phone number</span>
            </div>
            <div className={cx('container-input')}>
                <input
                    className={cx('input-box', {
                        ['error-input']: false,
                    })}
                    spellCheck={false}
                    type="text"
                    placeholder="Email address"
                ></input>
            </div>
            <div
                className={cx('container-input', {
                    ['unpassed-border']: !isFocusPassword && isErrorPassword,
                })}
            >
                <input
                    className={cx('input-box', {
                        ['unpassed-validate']: !isFocusPassword && isErrorPassword,
                    })}
                    spellCheck={false}
                    type={isHiddenPassword ? 'password' : 'text'}
                    placeholder="Password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    onFocus={() => setIsFocusPassword(true)}
                    onBlur={onBlurPassword}
                ></input>
                <div className={cx('wrapper-eye')} onClick={() => setIsHiddenPassword(!isHiddenPassword)}>
                    {!isHiddenPassword && <FontAwesomeIcon icon={faEye} className={cx('icon-eye')} />}
                    {isHiddenPassword && <FontAwesomeIcon icon={faEyeSlash} className={cx('icon-eye')} />}
                </div>
            </div>
            {(isFocusPassword || isErrorPassword) && (
                <div className={cx('validte-password')}>
                    <p className={cx('title')}>Your password must include:</p>
                    <div
                        className={cx('condition', {
                            ['passed-validate']: isEnoughLengthPass,
                        })}
                    >
                        <FontAwesomeIcon icon={faCheck} className={cx('validate-icon')}></FontAwesomeIcon>
                        <span
                            className={cx('role', {
                                ['unpassed-validate']: !isFocusPassword && !isEnoughLengthPass,
                            })}
                        >
                            8 to 20 characters
                        </span>
                    </div>
                    <div
                        className={cx('condition', {
                            ['passed-validate']: isEnoughCharacterPass,
                        })}
                    >
                        <FontAwesomeIcon icon={faCheck} className={cx('validate-icon')}></FontAwesomeIcon>
                        <span
                            className={cx('role', {
                                ['unpassed-validate']: !isFocusPassword && !isEnoughCharacterPass,
                            })}
                        >
                            Letters, digits, special characters
                        </span>
                    </div>
                </div>
            )}
            <div className={cx('container-input')}>
                <input
                    className={cx('input-box', {
                        // eslint-disable-next-line no-useless-computed-key
                        ['error-input']: isFocusCode && isErrorCode,
                        ['unpassed-validate']: !isFocusCode && isErrorCode,
                        ['unpassed-input_boder']: !isFocusCode && isErrorCode,
                    })}
                    spellCheck={false}
                    type="text"
                    placeholder="Fill with 6 digits"
                    value={inputCode}
                    onChange={(e) => {
                        setIsErrorCode(false);
                        setInputCode(e.target.value);
                    }}
                    onFocus={() => setIsFocusCode(true)}
                    onBlur={onBlurCode}
                ></input>
                <button
                    className={cx('send-code', {
                        // eslint-disable-next-line no-useless-computed-key
                        ['send-allow']: false,
                    })}
                    onClick={onSendCode}
                >
                    Send
                </button>
            </div>
            <div className={cx('commitee')}>
                <input
                    type="checkbox"
                    id="commit"
                    className={cx('input-checkbox', {
                        ['input-box-checked']: isChecked,
                    })}
                ></input>
                <FontAwesomeIcon icon={faCheck} className={cx('non-check')} onClick={onClickCheck} />
                <label className={cx('label-checkbox')} onClick={onClickCheck}>
                    Get trending content, newsletters, promotions, oppotunities, recommendations, and account updates
                    sent to your email.
                </label>
            </div>
            <button
                className={cx('continue', {
                    active: false,
                })}
                onClick={onNext}
            >
                Next
            </button>
        </div>
    );
}

export default Email;
