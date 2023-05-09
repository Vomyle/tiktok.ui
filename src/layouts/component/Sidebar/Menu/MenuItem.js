import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
function MenuItem({ title, to, icon, activeIcon }) {
    return (<NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>

        <span className={cx('icon')}>  {icon}</span>
        <span className={cx('activeIcon')}>{activeIcon}</span>

        <span className={cx('title')}>{title}</span>

    </NavLink>);
}
MenuItem.propTypes = {
    title: PropTypes.node.isRequired,
    to: PropTypes.node.isRequired,
    icon: PropTypes.node.isRequired,

}
export default MenuItem;