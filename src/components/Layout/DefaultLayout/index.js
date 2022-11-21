import classNames from 'classnames/bind';
import { IoIosNotifications } from 'react-icons/io';
import { AiOutlineCamera } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { onSnapshot, collection } from 'firebase/firestore';
import db from '~/components/Firebase';

import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
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
                            {account.map((value) => {
                                if (value.id == auth.currentUser.uid) {
                                    return (
                                        <div className={cx('content-header-right-children-info')} key={value.id}>
                                            <h4>Xin chào</h4>
                                            <h3>{value.name}</h3>
                                        </div>
                                    );
                                }
                            })}
                        </Link>
                    </div>
                </div>
                <div className={cx('content-main')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
