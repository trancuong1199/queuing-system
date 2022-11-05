import classNames from 'classnames/bind';

import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

function Dropdown({ children, medium, small }) {
    let DropdownSelect = 'div';
    const classes = cx('wrapper', { medium, small });

    return <DropdownSelect className={classes}>{children}</DropdownSelect>;
}

export default Dropdown;
