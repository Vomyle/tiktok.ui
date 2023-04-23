import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
function Sidebar() {
    const cx=classNames.bind(styles)
    return (<aside className={cx('wrapper')}>
    <h2>sidebar</h2>
    </aside>);
}

export default Sidebar;