import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const [isScroll, setIsScroll] = useState(false);
    const [isFirst, setIsfirst] = useState(0);
    const backBtn = useRef();
    useEffect(() => {
        const listenWindow = () => {
            if (window.scrollY > 0 && !isScroll) {
                if (isFirst === 0) {
                    setIsfirst(1);
                }
                setIsScroll(true);
            }

            if (window.scrollY === 0 && isScroll) {
                setIsScroll(false);
            }
        };
        window.addEventListener('scroll', listenWindow);
        //clean up
        return () => window.removeEventListener('scroll', listenWindow);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isScroll]);

    const onComeBack = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('side-bar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>{children}</div>
                {isFirst === 1 && (
                    <div
                        className={cx('back-first-page', {
                            // eslint-disable-next-line no-useless-computed-key
                            ['hidden-first-page']: !isScroll,
                        })}
                        ref={backBtn}
                        onClick={onComeBack}
                    >
                        <Button small primary className={cx('back-btn')}>
                            {
                                <FontAwesomeIcon
                                    icon={faForwardStep}
                                    style={{ lineHeight: '1px', fontSize: '2rem' }}
                                    rotation={270}
                                />
                            }
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
export default DefaultLayout;
