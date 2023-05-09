
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '~/component/popper'
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles)
function AccountItem() {
    const renderPreview = (props) => {
        return (
            //tabindex:là thứ tự khi ấn phím tab vào nó focus -1 thì k tab vào đc
            <div className={cx('preview')} tabIndex={-1} {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (<div>
        <Tippy
            interactive
            placement='bottom'

            //[ẩn, hiện]
            delay={[800, 0]}
            render={renderPreview}
        >
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1683741600&x-signature=SLJCqOZ%2FoiF%2FlGrONThhNKPDpYU%3D' alt='' />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>vothimyle</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>võ thị mỹ lệ</p>

                </div>
            </div>
        </Tippy>
    </div>);
}

export default AccountItem;