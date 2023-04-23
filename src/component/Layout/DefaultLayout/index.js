import Header from '~/component/Layout/component/Header'
import Sidebar from './Sidebar'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
function DefaulLayout({children}) {
    const cx=classNames.bind(styles)
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

export default DefaulLayout;
