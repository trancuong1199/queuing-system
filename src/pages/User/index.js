import classNames from 'classnames/bind';
import { AiOutlineCamera } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { onSnapshot, collection } from 'firebase/firestore';
import db from '~/components/Firebase';

import styles from './User.module.scss';

const cx = classNames.bind(styles);

function User() {
    const auth = getAuth();
    const [user, setUser] = useState();
    const [account, setAccount] = useState([]);

    useEffect(() => {
        setUser(auth.currentUser);

        onSnapshot(collection(db, 'account'), (snapshot) => {
            setAccount(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            {account.map((value) => {
                if (value.id == auth.currentUser.uid) {
                    return (
                        <>
                            <div className={cx('user')}>
                                <img
                                    src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/184290103_2954644461529286_7373766100645231884_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gbJfDwXHBJEAX90nIeY&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdH5Exjhnb-9IEcG-uq33Vnhw2B4EARYoN9GyxTs4tAw&oe=637F8BE4"
                                    alt="avatar"
                                />
                                <div>
                                    <AiOutlineCamera className={cx('user-icon')} />
                                </div>
                                <span>{value.name}</span>
                            </div>
                            <div className={cx('user-form')}>
                                <div className={cx('user-form-middle')}>
                                    <label>Tên người dùng</label>
                                    <input type="text" placeholder={value.name} />
                                    <label>Số điện thoại</label>
                                    <input type="text" placeholder={value.phone} />
                                    <label>Email:</label>
                                    <input type="text" placeholder={value.email} />
                                </div>

                                <div className={cx('user-form-middle')}>
                                    <label>Tên đăng nhập</label>
                                    <input type="text" placeholder={value.userName} />
                                    <label>Mật khẩu</label>
                                    <input type="text" placeholder={value.password} />
                                    <label>Vai trò:</label>
                                    <input type="text" placeholder={value.level} />
                                </div>
                            </div>
                        </>
                    );
                }
            })}
        </div>
    );
}

export default User;
