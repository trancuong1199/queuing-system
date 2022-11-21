import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import db from '~/components/Firebase';

import Button from '~/components/Button';
import styles from '~/pages/Products/ListProducts/ListProducts.module.scss';
import style from '~/components/Dropdown/Dropdown.module.scss';
import tables from '~/components/Table/Table.module.scss';
import { handleGetId } from '../UpdateLevel';

const cx = classNames.bind(styles);
const cv = classNames.bind(style);
const tb = classNames.bind(tables);

function ListLevel() {
    const [levels, setLevel] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'level'), (snapshot) => {
            setLevel(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('products-header')}>
                <h3>Danh sách vai trò</h3>
                <div className={cx('products-header__option')}>
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
                                <th className={tb('idProduct')}>Tên vai trò</th>
                                <th className={tb('nameProduct')}>Số người dùng</th>
                                <th className={tb('addressProduct')}>Mô tả</th>
                                <th className={tb('detailProduct')}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {levels.map((level, index) => (
                                <tr className={index % 2 === 0 ? tb('table-results') : tb('table-change')} key={index}>
                                    <th>{level.name}</th>
                                    <td>{level.quantityUserUse}</td>
                                    <td>{level.detail}</td>
                                    <td>
                                        <Button link to="/updateLevel">
                                            <p
                                                className={cx('table-results-detail')}
                                                onClick={() => handleGetId(level.id)}
                                            >
                                                Cập nhật
                                            </p>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Button navigate to="/addLevel">
                <FontAwesomeIcon icon={faSquarePlus} className={cx('iconPlus')} />
                <p className={cx('navigateProduct')}>Thêm vai trò</p>
            </Button>
        </div>
    );
}

export default ListLevel;
