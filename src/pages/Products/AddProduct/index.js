import classNames from 'classnames/bind';
import { AiFillCaretDown } from 'react-icons/ai';
import { collection, addDoc } from 'firebase/firestore';

import db from '~/components/Firebase';
import styles from './AddProduct.module.scss';
import Dropdown from '~/components/Dropdown';
import style from '~/components/Dropdown/Dropdown.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const cv = classNames.bind(style);
const $ = document.querySelector.bind(document);

export const handleItemFirst = () => {
    const title = $('.select-title');
    const listInput = $('.option-item-first').textContent;
    title.innerHTML = listInput;
};

export const handleItemSecond = () => {
    const title = $('.select-title');
    const listInput = $('.option-item-children').textContent;
    title.innerHTML = listInput;
};

function Products() {
    const handleAddProduct = async () => {
        const code = $('#codeProduct').value;
        const name = $('#nameProduct').value;
        const ip = $('#ipProduct').value;
        const user = $('#user').value;
        const password = $('#password').value;
        const title = $('.select-title').textContent;
        const service = $('#service').value;

        const collectionRef = collection(db, 'products');
        const payload = {
            name: name,
            code: code,
            ip: ip,
            user: user,
            password: password,
            service: service,
            type: title,
        };

        await addDoc(collectionRef, payload);
        alert('Thêm thành công!');
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('products-header')}>
                <h3>Quản lí thiết bị</h3>
            </header>

            <div className={cx('addProduct-main')}>
                <h4 className={cx('addProduct-main-title')}>Thêm thiết bị</h4>
                <div className={cx('addProduct-form')}>
                    <div className={cx('addProduct-form-children')}>
                        <label className={cx('form-label')}>
                            Mã thiết bị:<span>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập mã thiết bị"
                            className={cx('form-input')}
                            id={cx('codeProduct')}
                        />
                        <label className={cx('form-label')}>
                            Tên thiết bị:<span>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập tên thiết bị"
                            className={cx('form-input')}
                            id={cx('nameProduct')}
                        />
                        <label className={cx('form-label')}>
                            Địa chỉ IP:<span>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ IP"
                            className={cx('form-input')}
                            id={cx('ipProduct')}
                        />
                    </div>

                    <div className={cx('addProduct-form-children')}>
                        <label className={cx('form-label')}>
                            Loại thiết bị:<span>*</span>
                        </label>
                        <Dropdown>
                            <span className={cv('select-label')} id={cv('add-title')}>
                                <p className={cv('select-title')}>Mời chọn</p>
                                <AiFillCaretDown className={cv('dropdownIcon')} />
                            </span>
                            <ul className={cv('dropdownList')} medium>
                                <li className={cv('option-item')} id={cv('itemLarge')} onClick={handleItemFirst}>
                                    <span className={cv('option-item-first')}>Kiosk</span>
                                </li>
                                <li className={cv('option-item')} id={cv('itemLarge')} onClick={handleItemSecond}>
                                    <span className={cv('option-item-children')}>Display counter</span>
                                </li>
                            </ul>
                        </Dropdown>
                        <label className={cx('form-label')}>
                            Tên đăng nhập:<span>*</span>
                        </label>
                        <input type="text" placeholder="Nhập tài khoản" className={cx('form-input')} id={cx('user')} />
                        <label className={cx('form-label')}>
                            Mật khẩu:<span>*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            className={cx('form-input')}
                            id={cx('password')}
                        />
                    </div>
                </div>
                <div className={cx('addService')}>
                    <label className={cx('form-label')}>
                        Dịch vụ sử dụng:<span>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập dịch vụ sử dụng"
                        className={cx('form-input')}
                        id={cx('service')}
                    />
                </div>
                <label className={cx('form-label')}>
                    <span>*</span>
                    Là trường thông tin bắt buộc
                </label>
            </div>

            <footer className={cx('products-footer')}>
                <Button outline to="/listProducts" className={cx('btn-cancel')}>
                    Hủy bỏ
                </Button>
                <Button primary onClick={handleAddProduct}>
                    Thêm thiết bị
                </Button>
            </footer>
        </div>
    );
}

export default Products;
