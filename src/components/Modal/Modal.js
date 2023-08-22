import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import LoginForm from '../../Layout/components/LoginForm/LoginForm';
import RegisterForm from '../../Layout/components/RegisterForm/RegisterForm';
import { useState } from 'react';
import { connect } from 'react-redux';
import defaultDispatchs from '../../store/actions/defaultDispatch';
const cx = classNames.bind(styles);
function Modal({ ...props }) {
    const [isLogin, setIsLogin] = useState(false);
    const onLogin = props.onLogIn;
    const onModal = () => {
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
    };

    const onChangeMethod = () => {
        setIsLogin(!isLogin);
    };

    const onRemoveModal = () => {
        props.closeModal();
        onModal();
    };

    const methods = {
        onChangeMethod,
        onRemoveModal,
        onLogin,
    };

    return (
        <div className={cx('modal')} onClick={onRemoveModal}>
            <div className={cx('container-form')}>
                {!isLogin && <LoginForm {...methods}></LoginForm>}
                {isLogin && <RegisterForm {...methods}></RegisterForm>}
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return { isModal: state.isModal };
};

const mapDispatchToProps = defaultDispatchs;
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
