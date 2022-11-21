import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ConfirmPassword.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ConfirmPassword() {
    const [email, setEmail] = useState('');

    const onChange = (e) => {
        setEmail(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            toast.success('Email was sent');
        } catch (error) {
            toast.error('Could not send reset email');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('singIn-left')}>
                <img src={images.logo} alt="logo" />
                <form onSubmit={onSubmit}>
                    <div className={cx('inner')}>
                        <label htmlFor={cx('name')} className={cx('inner-detail')} id={cx('inner__title')}>
                            Đặt lại mật khẩu
                        </label>
                        <label
                            htmlFor={cx('inputName')}
                            className={cx('inner-detail')}
                            value={email}
                            onChange={onChange}
                        >
                            Vui lòng nhập Email để đặt lại mật khẩu của bạn*
                        </label>
                        <input type="text" placeholder="Mời nhập email..." id={cx('inputName')} />
                    </div>
                    <div className={cx('btn')}>
                        <Button outline to="/">
                            Hủy
                        </Button>
                        <Button primary>Tiếp tục</Button>
                    </div>
                </form>
            </div>
            <div className={cx('singIn-right')}>
                <img src={images.confirmPassword} alt="img-signIn" />
            </div>
        </div>
    );
}

export default ConfirmPassword;
