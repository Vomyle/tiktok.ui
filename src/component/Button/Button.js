import classNames from "classnames/bind";
import styles from './Button.mode.scss';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
//to:linh nội bộ thì dùng react-router-dom
function Button({
    to,
    href,
    primary,
    outline = false,
    small = false,
    disabled = false,
    large = false,
    children,
    rounded = false,
    text,
    className,
    leftIcon,
    onClick }) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        className,
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        leftIcon,
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
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')} >{children}</span>

        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.string,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button;