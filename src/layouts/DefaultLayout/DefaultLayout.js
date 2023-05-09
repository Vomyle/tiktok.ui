import Header from '~/layouts/component/Header/Header'
import Sidebar from '~/layouts/component/Sidebar'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
function DefaulLayout({ children }) {
    const cx = classNames.bind(styles)
    return (

        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className='content'>{children}</div>


            </div>
        </div>
    );
}
DefaulLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default DefaulLayout;
