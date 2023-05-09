import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from "~/component/Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function AccountPreview() {
    return (<div className={cx('wrapper')}>
        <header className={cx('header')}>
            <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1683741600&x-signature=SLJCqOZ%2FoiF%2FlGrONThhNKPDpYU%3D" className={cx('avatar')} alt="" />
            <div>       <Button primary>Following</Button></div>
        </header>
        <div className={cx('body')}>
            <p className={cx('nickname')}>
                <strong>vothimyle</strong>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>võ thị mỹ lệ</p>
            <div className={cx('describe')}>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                </p>
                <p className={cx('textlike')}>
                    <strong className={cx('value')}>123.2M</strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </div>
    </div>);
}

export default AccountPreview;