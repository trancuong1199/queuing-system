import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    navigate = false,
    link = false,
    medium,
    small,
    large,
    onClick,
    children,
}) {
    let Comp = 'button';
    const props = { onClick };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', { primary, outline, small, medium, large, text, navigate, link });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
