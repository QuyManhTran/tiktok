import classNames from 'classnames/bind';
import styles from './VerifyInfor.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState, memo } from 'react';
import { months, allDay, allYear } from '../../../../asset/data/headerData';
const cx = classNames.bind(styles);

function VerifyInfor() {
    const [month, setMonth] = useState('Month');
    const [day, setDay] = useState('Day');
    const [year, setYear] = useState('Year');
    const [monthUp, setMonthUp] = useState(false);
    const [dayUp, setDayUp] = useState(false);
    const [yearUp, setYearUp] = useState(false);

    const onSetDate = (id, e) => {
        e.stopPropagation();
        switch (id) {
            case '#month':
                setMonthUp(!monthUp);
                break;
            case '#day':
                setDayUp(!dayUp);
                break;
            case '#year':
                setYearUp(!yearUp);
                break;
            default:
                alert('Error');
        }
        if (document.querySelector(id).style.display === 'block') {
            document.querySelector(id).style.display = 'none';
        } else {
            document.querySelector(id).style.display = 'block';
        }
    };

    const onCloseAll = () => {
        document.querySelector('#month').style.display = 'none';
        document.querySelector('#day').style.display = 'none';
        document.querySelector('#year').style.display = 'none';
        if (dayUp) {
            setDayUp(false);
        }
        if (monthUp) {
            setMonthUp(false);
        }
        if (yearUp) {
            setYearUp(false);
        }
    };
    const onSelect = (e) => {
        if (e.target.getAttribute('type') === 'month') {
            setMonth(e.target.innerText);
        } else if (e.target.getAttribute('type') === 'day') {
            setDay(e.target.innerText);
        } else if (e.target.getAttribute('type') === 'year') {
            setYear(e.target.innerText);
        }
    };

    return (
        <div className={cx('wrapper')} onClick={onCloseAll}>
            <header className={cx('birth-date')}>
                <span className={cx('title')}>What is your date of birth?</span>
                <div className={cx('date-infor')}>
                    <div className={cx('wrapper-infor')} onClick={(e) => onSetDate('#month', e)}>
                        <div className={cx('inner-infor')}>
                            {month}
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                className={cx('icon-down', {
                                    ['icon-up']: monthUp,
                                })}
                            />
                        </div>
                        <div id="month" className={cx('date-option')}>
                            {months.map((month, index) => (
                                <p type="month" className={cx('option-item')} key={index} onClick={onSelect}>
                                    {month}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className={cx('wrapper-infor')} onClick={(e) => onSetDate('#day', e)}>
                        <div className={cx('inner-infor')}>
                            {day}
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                className={cx('icon-down', {
                                    ['icon-up']: dayUp,
                                })}
                            />
                        </div>
                        <div id="day" className={cx('date-option')}>
                            {allDay.map((day, index) => (
                                <p type="day" className={cx('option-item')} key={index} onClick={onSelect}>
                                    {day}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className={cx('wrapper-infor')} onClick={(e) => onSetDate('#year', e)}>
                        <div className={cx('inner-infor')}>
                            {year}
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                className={cx('icon-down', {
                                    ['icon-up']: yearUp,
                                })}
                            />
                        </div>
                        <div id="year" className={cx('date-option')}>
                            {allYear.map((year, index) => (
                                <p className={cx('option-item')} type="year" key={index} onClick={onSelect}>
                                    {year}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default VerifyInfor;
