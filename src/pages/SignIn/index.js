import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SignIn() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('singIn-left')}>
                <img src={images.logo} alt="logo" />
                <div className={cx('inner')}>
                    <label htmlFor={cx('name')}>Tên đăng nhập*</label>
                    <input type="text" placeholder="Mời nhập tên đăng nhập..." id={cx('name')} />
                    <label htmlFor={cx('password')}>Mật khẩu*</label>
                    <input type="text" placeholder="Mời nhập mật khẩu..." id={cx('password')} />
                    <Button text>Quên mật khẩu?</Button>
                </div>
                <Button primary>Đăng nhập</Button>
            </div>
            <div className={cx('singIn-right')}>
                <img src={images.signIn} alt="img-signIn" />
                <div className={cx('title')}>
                    <p>Hệ thống</p>
                    <h3>Quản lí xếp hàng</h3>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
