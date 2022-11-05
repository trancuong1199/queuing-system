import classNames from 'classnames/bind';
import { AiOutlineCamera } from 'react-icons/ai';

import styles from './User.module.scss';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <img
                    src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/184290103_2954644461529286_7373766100645231884_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gbJfDwXHBJEAX90nIeY&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdH5Exjhnb-9IEcG-uq33Vnhw2B4EARYoN9GyxTs4tAw&oe=637F8BE4"
                    alt="avatar"
                />
                <div>
                    <AiOutlineCamera className={cx('user-icon')} />
                </div>
                <span>Trần Thế Cương</span>
            </div>
            <div className={cx('user-form')}>
                <div className={cx('user-form-middle')}>
                    <label>Tên người dùng</label>
                    <input type="text" placeholder="Trần Thế Cương" />
                    <label>Số điện thoại</label>
                    <input type="text" placeholder="0353117498" />
                    <label>Email:</label>
                    <input type="text" placeholder="cuontran@gmail.com" />
                </div>

                <div className={cx('user-form-middle')}>
                    <label>Tên đăng nhập</label>
                    <input type="text" placeholder="cuongtran11" />
                    <label>Mật khẩu</label>
                    <input type="text" placeholder="112358" />
                    <label>Vai trò:</label>
                    <input type="text" placeholder="Quản lí" />
                </div>
            </div>
        </div>
    );
}

export default User;
