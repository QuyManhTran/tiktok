import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import HeaderVideo from './HeaderVideo';
import { Fragment } from 'react';
import ContentVideo from './ContentVideo/ContentVideo';
// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function Video({ data }) {
    return (
        <Fragment>
            <HeaderVideo data={data}></HeaderVideo>
            <ContentVideo></ContentVideo>
        </Fragment>
    );
}

export default Video;
