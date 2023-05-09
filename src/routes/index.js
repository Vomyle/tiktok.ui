import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload'
import { HeaderOnly } from '~/layouts'
import Search from '~/pages/Search'
import Profile from '~/pages/Profile';
import config from '~/config'
import live from '~/pages/live';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following, },
    { path: config.routes.profile, component: Profile, },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    { path: config.routes.live, component: live },

];
const privateRoutes = [

]
export { publicRoutes, privateRoutes }