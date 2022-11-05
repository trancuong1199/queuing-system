import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ChangePassword.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ChangePassword() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('singIn-left')}>
                <img src={images.logo} alt="logo" />
                <label htmlFor={cx('name')} id={cx('inner-title')}>
                    Đặt lại mật khẩu mới
                </label>
                <div className={cx('inner')}>
                    <label htmlFor={cx('name')}>Mật khẩu:</label>
                    <input type="text" placeholder="Mời nhập mật khẩu..." id={cx('name')} />
                    <label htmlFor={cx('nameAgain')}>Nhập lại mật khẩu:</label>
                    <input type="text" placeholder="Mời nhập lại mật khẩu..." id={cx('nameAgain')} />
                </div>
                <div className={cx('btn')}>
                    <Button primary>Xác nhận</Button>
                </div>
            </div>
            <div className={cx('singIn-right')}>
                <img src={images.confirmPassword} alt="img-signIn" />
            </div>
        </div>
    );
}

export default ChangePassword;
