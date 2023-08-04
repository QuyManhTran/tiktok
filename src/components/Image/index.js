import { forwardRef, useState } from 'react';
import images from '../../asset/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({ alt, src, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...props}
            alt={alt}
            src={fallBack || src}
            onError={handleError}
        ></img>
    );
});

export default Image;
