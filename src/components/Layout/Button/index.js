import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.scss';

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    leftIcon = false,
    onClick,
    children,
    passProps,
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = clsx(styles.wrapper, {
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.small]: small,
        [styles.large]: large,
        [styles.text]: text,
        [styles.disabled]: disabled,
        [styles.rounded]: rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={clsx(styles.icon)}>{leftIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
