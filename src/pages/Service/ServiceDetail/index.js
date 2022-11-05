import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { onSnapshot, collection } from 'firebase/firestore';
import db from '~/components/Firebase';

import classNames from 'classnames/bind';
import styles from './ServiceDetail.module.scss';
import style from '~/pages/Products/AddProduct/AddProduct.module.scss';
import styless from '~/pages/Products/ListProducts/ListProducts.module.scss';
import Button from '~/components/Button';
import { handleGetId } from '~/pages/Products/UpdateProduct';

const cx = classNames.bind(styles);
const cv = classNames.bind(style);
const cs = classNames.bind(styless);

let getid;

export const handleDetail = (id) => {
    getid = id;
};

function ServiceDetail() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'products'), (snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
    }, []);

    return (
        <div className={cv('wrapper')}>
            <header className={cv('products-header')}>
                <h3>Quản lí dịch vụ</h3>
            </header>

            <div className={cv('addProduct-main')}>
                <h4 className={cv('addProduct-main-title')}>Thông tin dịch vụ</h4>
                <div className={cv('addProduct-form')}>
                    <div className={cv('addProduct-form-children')}>
                        <label className={cv('form-label')}>
                            Mã dịch vụ:<span>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập mã thiết bị"
                            className={cv('form-input')}
                            id={cv('codeProduct')}
                        />
                        <label className={cv('form-label')}>
                            Tên dịch vụ:<span>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập tên thiết bị"
                            className={cv('form-input')}
                            id={cv('nameProduct')}
                        />
                    </div>

                    <div className={cv('addProduct-form-children')}>
                        <label className={cv('form-label')}>Mô tả:</label>
                        <textarea type="text" placeholder="Mô tả dịch vụ" className={cx('description')} />
                    </div>
                </div>
                <h4 className={cv('addProduct-main-title')} id={cv('rule-title')}>
                    Quy tắc cấp số
                </h4>

                <div className={cx('rule-main')}>
                    <div className={cx('rule-main-children')}>
                        <div className={cx('rule-main-children__left')}>
                            <input type="checkbox" />
                            <span>Tăng tự động từ: </span>
                        </div>
                        <div className={cx('rule-main-children__right')}>
                            <input type="text" placeholder="00001" />
                            <span>Đến</span>
                            <input type="text" placeholder="99999" />
                        </div>
                    </div>
                    <div className={cx('rule-main-children')}>
                        <div className={cx('rule-main-children__left')}>
                            <input type="checkbox" />
                            <span>Prefix: </span>
                        </div>
                        <div className={cx('rule-main-children__right')}>
                            <input type="text" placeholder="00001" />
                        </div>
                    </div>
                    <div className={cx('rule-main-children')}>
                        <div className={cx('rule-main-children__left')}>
                            <input type="checkbox" />
                            <span>Surfix: </span>
                        </div>
                        <div className={cx('rule-main-children__right')}>
                            <input type="text" placeholder="00001" />
                        </div>
                    </div>
                    <div className={cx('rule-main-children')}>
                        <div className={cx('rule-main-children__left')}>
                            <input type="checkbox" />
                            <span>Reset mỗi ngày </span>
                        </div>
                    </div>
                </div>

                <label className={cx('require')}>
                    <span>*</span>
                    Là trường thông tin bắt buộc
                </label>
            </div>
            <footer className={cv('products-footer')}>
                <Button outline to="/listProducts" className={cv('btn-cancel')}>
                    Hủy bỏ
                </Button>
                <Button primary>Thêm dịch vụ</Button>
            </footer>
        </div>
    );
}

export default ServiceDetail;
