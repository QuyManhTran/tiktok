import classNames from 'classnames/bind';
import styles from './RegisterForm.mudule.scss';
import WrapperForm from '../../../components/WrapperForm';
import { useEffect, useState, memo, useCallback } from 'react';
import SelectionStep from './SelectionStep';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function RegisterForm({ ...props }) {
    const [allSteps, setAllSteps] = useState([{ component: SelectionStep }]);
    const [CurrentStep, setCurrentStep] = useState(() => allSteps[allSteps.length - 1].component);

    // function
    const onChangeStep = useCallback((component) => {
        if (typeof component !== 'function') {
            alert('not a component');
        } else {
            setAllSteps((prev) => [...prev, { component: component }]);
        }
    }, []);

    const onBackStep = () => {
        if (allSteps.length > 1) {
            setAllSteps((prev) => [...prev.slice(0, prev.length - 1)]);
        }
    };

    useEffect(() => {
        if (CurrentStep) {
            setCurrentStep(() => allSteps[allSteps.length - 1].component);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allSteps]);

    return (
        <WrapperForm
            headTitle="Register Tiktok"
            footTitle={`Have you already had an account?`}
            role="Login"
            privacy="Do you agree with our pirvacy in the term of using of Tiktok and confirming that you understood the policy of privacy of Tiktok"
            {...props}
        >
            {allSteps.length > 1 && (
                <FontAwesomeIcon icon={faAngleLeft} className={cx('icon-back')} onClick={onBackStep}></FontAwesomeIcon>
            )}
            <CurrentStep onChangeStep={onChangeStep}></CurrentStep>
        </WrapperForm>
    );
}

export default memo(RegisterForm);
