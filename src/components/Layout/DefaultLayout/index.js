import classNames from 'classnames/bind';
import { IoIosNotifications } from 'react-icons/io';

import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content')}>
                <div className={cx('content-header')}>
                    <h2 className={cx('content-header-title')}>Thông tin cá nhân</h2>
                    <div className={cx('content-header-right')}>
                        <IoIosNotifications className={cx('content-header-icon')} />
                        <Link className={cx('content-header-right-children')} to="/user">
                            <img
                                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/184290103_2954644461529286_7373766100645231884_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gbJfDwXHBJEAX90nIeY&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdH5Exjhnb-9IEcG-uq33Vnhw2B4EARYoN9GyxTs4tAw&oe=637F8BE4"
                                alt="logo"
                            />
                            <div className={cx('content-header-right-children-info')}>
                                <h4>Xin chào</h4>
                                <h3>Trần Thế Cương</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={cx('content-main')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
