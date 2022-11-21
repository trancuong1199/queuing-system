import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import db from '~/components/Firebase';

import Button from '~/components/Button';
import styles from '~/pages/Products/ListProducts/ListProducts.module.scss';
import style from '~/components/Dropdown/Dropdown.module.scss';
import tables from '~/components/Table/Table.module.scss';
import Dropdown from '~/components/Dropdown';

const cx = classNames.bind(styles);
const cv = classNames.bind(style);
const tb = classNames.bind(tables);

function ListAccounts() {
    const [accounts, setAccounts] = useState([]);
    const [selected, setSelected] = useState('Mời chọn');
    const options = ['Kế toán', 'Marketing'];

    useEffect(() => {
        onSnapshot(collection(db, 'account'), (snapshot) => {
            setAccounts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('products-header')}>
                <h3>Danh sách tài khoản</h3>
                <div className={cx('products-header__option')}>
                    <div className={cx('products-header__option-selected')}>
                        <div className={cv('option-selected-children')}>
                            <label className={cv('header__option-selected-title')}>Tên vai trò</label>
                            <Dropdown selected={selected} setSelected={setSelected} options={options} medium />
                        </div>
                    </div>
                    <div className={cx('products-header__option-search')}>
                        <label className={cv('header__option-selected-title')}>Từ khóa</label>
                        <div className={cv('search')}>
                            <input placeholder="Nhập từ khóa" />
                            <button className={cv('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={cx('products-main')}>
                <div>
                    <table className={tb('table')}>
                        <thead className={tb('table-header')}>
                            <tr>
                                <th className={tb('idProduct')}>Tên đăng nhập</th>
                                <th className={tb('nameProduct')}>Họ tên</th>
                                <th className={tb('addressProduct')}>Số điện thoại</th>
                                <th className={tb('activeProduct')}>Email</th>
                                <th className={tb('connectProduct')}>Vai trò</th>
                                <th className={tb('accountStatus')}>Trạng thái hoạt động</th>
                                <th className={tb('detailProduct')}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account, index) => (
                                <tr
                                    className={index % 2 === 0 ? tb('table-results') : tb('table-change')}
                                    key={account.email}
                                >
                                    <th>{account.userName}</th>
                                    <td>{account.name}</td>
                                    <td>{account.phone}</td>
                                    <td>
                                        <span>{account.email}</span>
                                    </td>
                                    <td>{account.level}</td>
                                    <td>
                                        <div className={tb('notiResult')}>
                                            <span>
                                                {account.status === 'Không hoạt động' ? (
                                                    <FontAwesomeIcon className={tb('offIcon')} icon={faCircle} />
                                                ) : (
                                                    <FontAwesomeIcon className={tb('onIcon')} icon={faCircle} />
                                                )}
                                            </span>
                                            <p>
                                                {account.status === 'Không hoạt động' ? 'Không hoạt động' : 'Hoạt động'}
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <Button link to="/updateProduct">
                                            <p className={cx('table-results-detail')}>Cập nhật</p>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Button navigate to="/addAccount">
                <FontAwesomeIcon icon={faSquarePlus} className={cx('iconPlus')} />
                <p className={cx('navigateProduct')}>Thêm tài khoản</p>
            </Button>
        </div>
    );
}

export default ListAccounts;
