import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';

import images from '~/assets/images';
import Button from '~/components/Button';
import db from '~/components/Firebase';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignIn() {
    const [details, setDetail] = useState({});
    const [accounts, setAccounts] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        onSnapshot(collection(db, 'account'), (snapshot) => {
            setAccounts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
    }, []);

    const handleSubmit = () => {
        const err = document.querySelector('#err');
        accounts.map((account) => {
            if (account.userName == details.name && account.password == details.password) {
                navigate('/listProducts');
            } else {
                err.innerHTML = 'error';
            }
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('singIn-left')}>
                <img src={images.logo} alt="logo" />
                <h5 id={cx('err')}></h5>
                <div className={cx('inner')}>
                    <label htmlFor={cx('name')}>Tên đăng nhập*</label>
                    <input
                        type="text"
                        placeholder="Mời nhập tên đăng nhập..."
                        id={cx('name')}
                        onChange={(e) => setDetail({ ...details, name: e.target.value })}
                        value={details.name || ''}
                    />
                    <label htmlFor={cx('password')}>Mật khẩu*</label>
                    <input
                        type="password"
                        placeholder="Mời nhập mật khẩu..."
                        id={cx('password')}
                        onChange={(e) => setDetail({ ...details, password: e.target.value })}
                        value={details.password || ''}
                    />
                    <Button text to="/confirmPassword">
                        Quên mật khẩu?
                    </Button>
                </div>
                <Button primary onClick={handleSubmit}>
                    Đăng nhập
                </Button>
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
