import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { wrapper as PopperWrapper } from '~/component/popper'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import images from '~/assets/images'
import { faCircleQuestion, faCircleXmark, faEarth, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSign, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';
import Menu from '~/component/popper/Menu';
const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]
function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1])
        }, 0)
    }, [])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (

                        <div className={cx('search-result')}>

                            <PopperWrapper>
                                <h4 className={cx('search-title')}>accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />

                            </PopperWrapper>

                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="search account and video" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>

                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>

                        </button>
                    </div>

                </Tippy>

                <div className={cx('actions')}>
                    <Button text >Upload</Button>
                    <Button primary>Log in</Button>
                    <Menu
                        items={MENU_ITEMS}

                    >
                        <button className={cx('btn-more')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                        </button>
                    </Menu>

                </div>
            </div>
        </header>);
}

export default Header;