import { faBookmark, faCircleQuestion, faCircleUser, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faEarthAsia, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const menuItems = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        type: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'EN',
                    title: 'English',
                    type: 'Language',
                },
                {
                    code: 'VI',
                    title: 'Viet Nam',
                    type: 'Language',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/Feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

export const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>,
        title: 'Favourites ',
    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Setting',
    },
    ...menuItems,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        separate: true,
    },
];
