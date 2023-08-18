import classNames from 'classnames/bind';
import styles from './Email.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../../../../hooks';
import { codeCountries } from '../../../../../asset/data/formData';
const cx = classNames.bind(styles);
const delay = 500;
const maxCodeLength = 6;
function Email({ isClickAll }) {
    const [isSeeCode, SetIsSeeCode] = useState(false);
    const [inputPhoneNumber, setInputPhoneNumber] = useState('');
    const [isErrorPhoneNumber, setIsErrorPhoneNumber] = useState(false);
    const [inputCode, setInputCode] = useState('');
    const [isErrorCode, setIsErrorCode] = useState(false);
    //handle check delay
    const phoneDebounce = useDebounce(inputPhoneNumber, delay);

    // function handle
    const isContainAlphabet = (text) => {
        return /[a-zA-Z]/.test(text);
    };

    const onInputPhoneNumber = (input) => {
        const isError = isContainAlphabet(input);
        setIsErrorPhoneNumber(isError);
    };

    const onInputCode = (input) => {
        const isError = input.length === 0 || input.length > maxCodeLength;
        setIsErrorCode(isError);
    };

    const onRemoveDisplay = (e) => {
        if (isSeeCode) {
            console.log('oke');
            SetIsSeeCode(!isSeeCode);
        }
    };
    // Call API
    const onSendCode = () => {
        // send phone number
        if (isClickAll && !isErrorPhoneNumber && phoneDebounce) {
            alert('send phone number');
        }
    };

    const onNext = () => {
        alert('next');
    };

    useEffect(() => {
        onInputPhoneNumber(phoneDebounce);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phoneDebounce]);

    useEffect(() => {
        onInputCode(inputCode);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputCode]);
    return (
        <div className={cx('wrapper')} onClick={onRemoveDisplay}>
            <div className={cx('title')}>
                Email
                <span className={cx('link-email')}>Register via phone number</span>
            </div>
            <div className={cx('container-input')}>
                <input
                    className={cx('input-box', {
                        ['error-input']: isErrorPhoneNumber,
                    })}
                    value={inputPhoneNumber}
                    onChange={(e) => {
                        setIsErrorPhoneNumber(false);
                        setInputPhoneNumber(e.target.value);
                    }}
                    spellCheck={false}
                    type="text"
                    placeholder="Email address"
                ></input>
            </div>
            <div className={cx('container-input')}>
                <input
                    className={cx('input-box', {
                        ['error-input']: isErrorPhoneNumber,
                    })}
                    spellCheck={false}
                    type="text"
                    placeholder="Password"
                ></input>
            </div>
            <div className={cx('container-input')}>
                <input
                    className={cx('input-box')}
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    spellCheck={false}
                    type="text"
                    placeholder="Fill with 6 digits"
                ></input>
                <button
                    className={cx('send-code', {
                        // eslint-disable-next-line no-useless-computed-key
                        ['send-allow']: isClickAll && !isErrorPhoneNumber && phoneDebounce,
                    })}
                    onClick={onSendCode}
                >
                    Send
                </button>
            </div>
            <div className={cx('commitee')}>
                <input type="checkbox" id="commit" className={cx('input-checkbox')}></input>
                <label for="commit" className={cx('label-checkbox')}>
                    Get trending content, newsletters, promotions, recommendations and account updates sent to your
                    email
                </label>
            </div>
            <button
                className={cx('continue', {
                    active: isClickAll && !isErrorPhoneNumber && phoneDebounce && !isErrorCode,
                })}
                onClick={onNext}
            >
                Next
            </button>
        </div>
    );
}

export default Email;
