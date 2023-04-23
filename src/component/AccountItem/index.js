import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx=classNames.bind(styles)
function AccountItem() {
    return (
         <div className={cx('wrapper')}>
    <img className={cx('avata')} src="https://mega.com.vn/media/news/1406_hinh-nen-doraemon-4k55.jpg" alt="hoaa"/>
    <div className={cx('info')}>
    <h4 className={cx('name')}>
    <span>Võ Thị Mỹ Lệ</span>
    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /> 
    </h4>
    <span className={cx('username')}>vothimyle</span>
    </div>
    </div> 
    )
    ;
}

export default AccountItem;