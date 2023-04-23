import classNames from "classnames/bind";
import styles from './Button.mode.scss';
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
//to:linh nội bộ thì dùng react-router-dom
function Button({ 
    to,
     href,
      primary,
       outline=false,
       small=false,
       disabled=false,
       large=false,
       children,
       rounded=false,
       text,
        onClick }) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disabled
    });
    const props = {
        onClick,
    }
    if (disabled) {
        delete props.onClick
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;