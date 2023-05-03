import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import { wrapper as PopperWrapper } from '~/component/popper'
import MenuItem from "./MenuItem";
function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }


    const cx = classNames.bind(styles);
    return (<Tippy
        interactive
        visible
        placement='bottom-end'
        render={attrs => (

            <div className={cx('menu-list')}>

                <PopperWrapper className={cx('menu-poper')}>
                    {renderItem()}
                </PopperWrapper>

            </div>
        )}
    >
        {children}
    </Tippy>
    );
}

export default Menu;