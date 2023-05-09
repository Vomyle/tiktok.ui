import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import { HomeIcon, HomeActiveIcon, UserGroupIcon, LiveActiveIcon, UserGroupActiveIcon, LiveIcon } from '~/component/Icons'
import SuggestedAccounts from '~/component/SuggestedAccounts/SuggestedAccounts'
function Sidebar() {
    const cx = classNames.bind(styles)
    return (<aside className={cx('wrapper')}>

        <Menu>
            <MenuItem title="For your" to={config.routes.home} activeIcon={<HomeActiveIcon />} icon={<HomeIcon />} />
            <MenuItem title="Following" to={config.routes.following} activeIcon={<UserGroupActiveIcon />} icon={<UserGroupIcon />} />
            <MenuItem title="LIVE" to={config.routes.live} activeIcon={<LiveActiveIcon />} icon={<LiveIcon />} />

        </Menu>
        <SuggestedAccounts label="Suggested accounts" />
        <SuggestedAccounts label="Following" />
    </aside>);
}

export default Sidebar;