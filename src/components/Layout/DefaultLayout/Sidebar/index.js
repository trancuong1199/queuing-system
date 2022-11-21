import { TbLayoutDashboard } from 'react-icons/tb';
import { RiCustomerService2Line, RiMore2Line } from 'react-icons/ri';
import { GoSignOut } from 'react-icons/go';
import { TfiTablet, TfiLayersAlt, TfiAgenda, TfiSettings } from 'react-icons/tfi';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img
                        src="https://altamedia.vn/wp-content/uploads/sites/11/2020/11/Media-logo.png"
                        alt="Alta Media"
                    />
                </div>
                <div className={cx('menu')}>
                    <Link className={cx('menu-children')} to="/dashboard">
                        <TbLayoutDashboard className={cx('menu-icon')} />
                        DashBoard
                    </Link>
                    <Link className={cx('menu-children')} to="/listProducts">
                        <TfiTablet className={cx('menu-icon')} />
                        Thiết bị
                    </Link>
                    <Link className={cx('menu-children')} to="/listServices">
                        <RiCustomerService2Line className={cx('menu-icon')} />
                        Dịch vụ
                    </Link>
                    <Link className={cx('menu-children')} to="/listNumber">
                        <TfiLayersAlt className={cx('menu-icon')} />
                        Cấp số
                    </Link>
                    <Link className={cx('menu-children')} to="/report">
                        <TfiAgenda className={cx('menu-icon')} />
                        Báo cáo
                    </Link>
                    <div className={cx('menu-children')}>
                        <TfiSettings className={cx('menu-icon')} />
                        Cài đặt hệ thống
                        <RiMore2Line className={cx('menu-icon__more')} />
                        <ul className={cx('system-children')}>
                            <Link className={cx('system-children__link')} to="/listLevel">
                                Quản lí vai trò
                            </Link>
                            <Link className={cx('system-children__link')} to="/listAccounts">
                                Quản lí tài khoản
                            </Link>
                            <Link className={cx('system-children__link')} to="/historyActive">
                                Nhật kí người dùng
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className={cx('menu-btn')}>
                    <Button logout to="/">
                        <GoSignOut className={cx('btn-icon')} />
                        Đăng xuất
                    </Button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
