import { TbLayoutDashboard } from 'react-icons/tb';
import { RiCustomerService2Line, RiMore2Line } from 'react-icons/ri';
import { GoSignOut } from 'react-icons/go';
import { TfiTablet, TfiLayersAlt, TfiAgenda, TfiSettings } from 'react-icons/tfi';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

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
                    <Link className={cx('menu-children')}>
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
                    <div className={cx('menu-children')}>
                        <TfiLayersAlt className={cx('menu-icon')} />
                        Cấp số
                    </div>
                    <div className={cx('menu-children')}>
                        <TfiAgenda className={cx('menu-icon')} />
                        Báo cáo
                    </div>
                    <div className={cx('menu-children')}>
                        <TfiSettings className={cx('menu-icon')} />
                        Cài đặt hệ thống
                        <RiMore2Line className={cx('menu-icon__more')} />
                    </div>
                </div>
                <div className={cx('menu-btn')}>
                    <button className={cx('btn')}>
                        <GoSignOut className={cx('btn-icon')} />
                        Đăng xuất
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
