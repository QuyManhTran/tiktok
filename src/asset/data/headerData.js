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
                    title: 'Vietnamese',
                    type: 'Language',
                },
                {
                    code: 'FR',
                    title: 'French',
                    type: 'Language',
                },
                {
                    code: 'ES',
                    title: 'Spanish',
                    type: 'Language',
                },
                {
                    code: 'DE',
                    title: 'German',
                    type: 'Language',
                },
                {
                    code: 'ZH',
                    title: 'Chinese',
                    type: 'Language',
                },
                {
                    code: 'HI',
                    title: 'Hindi',
                    type: 'Language',
                },
                {
                    code: 'AR',
                    title: 'Arabic',
                    type: 'Language',
                },
                {
                    code: 'RU',
                    title: 'Russian',
                    type: 'Language',
                },
                {
                    code: 'JA',
                    title: 'Japanese',
                    type: 'Language',
                },
                {
                    code: 'PT',
                    title: 'Portuguese',
                    type: 'Language',
                },
                {
                    code: 'IT',
                    title: 'Italian',
                    type: 'Language',
                },
                {
                    code: 'KO',
                    title: 'Korean',
                    type: 'Language',
                },
                {
                    code: 'TR',
                    title: 'Turkish',
                    type: 'Language',
                },
                {
                    code: 'ID',
                    title: 'Indonesian',
                    type: 'Language',
                },
                {
                    code: 'TH',
                    title: 'Thai',
                    type: 'Language',
                },
                {
                    code: 'NL',
                    title: 'Dutch',
                    type: 'Language',
                },
                {
                    code: 'SW',
                    title: 'Swahili',
                    type: 'Language',
                },
                {
                    code: 'PL',
                    title: 'Polish',
                    type: 'Language',
                },
                {
                    code: 'UK',
                    title: 'Ukrainian',
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
