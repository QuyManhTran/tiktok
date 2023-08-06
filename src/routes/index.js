import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import { HeaderOnly } from '../components/Layout';
import pathConfigs from '../config/path';
const publicRoutes = [
    { path: pathConfigs.home, component: Home },
    { path: pathConfigs.following, component: Following },
    { path: pathConfigs.profile, component: Profile },
    { path: pathConfigs.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
