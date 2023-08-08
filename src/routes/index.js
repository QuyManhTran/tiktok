import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Live from '../pages/Live';
import { HeaderOnly } from '../Layout';
import config from '../config';
const publicRoutes = [
    { path: config.paths.home, component: Home },
    { path: config.paths.following, component: Following },
    { path: config.paths.profile, component: Profile },
    { path: config.paths.live, component: Live },
    { path: config.paths.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
