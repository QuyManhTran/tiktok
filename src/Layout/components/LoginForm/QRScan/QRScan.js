import classNames from 'classnames/bind';
import styles from './QRScan.module.scss';
import images from '../../../../asset/images';

const cx = classNames.bind(styles);
function QRScan({ onChangeStep }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>QR Code</h2>
            <div className={cx('container')}>
                <div className={cx('Qr-wrapper')}>
                    <img src={images.QrImage} alt="QR code" className={cx('Qr-img')}></img>
                </div>
                <div className={cx('instruction')}>
                    <p className={cx('step')}>1. Scan by camera on your mobile device</p>
                    <p className={cx('step')}>2. Verify login or register</p>
                </div>
            </div>
        </div>
    );
}

export default QRScan;
