import classNames from 'classnames/bind';
import styles from './PhoneNumber.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../../../../hooks';
import { codeCountries } from '../../../../../asset/data/formData';
const cx = classNames.bind(styles);
const delay = 500;
const maxCodeLength = 6;
function PhoneNumber({ isClickAll }) {
    const [isSeeCode, SetIsSeeCode] = useState(false);
    const [inputPhoneNumber, setInputPhoneNumber] = useState('');
    const [isErrorPhoneNumber, setIsErrorPhoneNumber] = useState(false);
    const [inputCode, setInputCode] = useState('');
    const [isErrorCode, setIsErrorCode] = useState(false);
    const [nationCode, setNationCode] = useState('VN +84');
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

    const onSeeNation = () => {
        SetIsSeeCode(!isSeeCode);
    };

    const onClickNation = (e) => {
        e.stopPropagation();
        setNationCode(e.target.getAttribute('shortcut'));
        SetIsSeeCode(!isSeeCode);
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
                Mobile Phone
                <span className={cx('link-email')}>Register via email</span>
            </div>
            <div className={cx('container-input')}>
                <div className={cx('area-number')} onClick={onSeeNation}>
                    {nationCode}
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={cx('icon-down', {
                            ['icon-up']: isSeeCode,
                        })}
                    />
                    <div
                        className={cx('nation-codes', {
                            ['see-code']: isSeeCode,
                        })}
                    >
                        {codeCountries.map((element, index) => (
                            <p
                                key={index}
                                className={cx('code-item')}
                                shortcut={element.shortcut}
                                onClick={onClickNation}
                            >
                                {element.code}
                            </p>
                        ))}
                    </div>
                    <div className={cx('separate')}></div>
                </div>
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
                    placeholder="Phone Number"
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

export default PhoneNumber;
