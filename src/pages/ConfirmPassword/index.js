import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ConfirmPassword.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ConfirmPassword() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('singIn-left')}>
                <img src={images.logo} alt="logo" />
                <div className={cx('inner')}>
                    <label htmlFor={cx('name')} className={cx('inner-detail')} id={cx('inner__title')}>
                        Đặt lại mật khẩu
                    </label>
                    <label htmlFor={cx('inputName')} className={cx('inner-detail')}>
                        Vui lòng nhập Email để đặt lại mật khẩu của bạn*
                    </label>
                    <input type="text" placeholder="Mời nhập lại mật khẩu..." id={cx('inputName')} />
                </div>
                <div className={cx('btn')}>
                    <Button outline>Hủy</Button>
                    <Button primary>Đăng nhập</Button>
                </div>
            </div>
            <div className={cx('singIn-right')}>
                <img src={images.confirmPassword} alt="img-signIn" />
            </div>
        </div>
    );
}

export default ConfirmPassword;
