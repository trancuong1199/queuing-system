import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import db from '~/components/Firebase';

import Button from '~/components/Button';
import styles from './ListProducts.module.scss';
import style from '~/components/Dropdown/Dropdown.module.scss';
import tables from '~/components/Table/Table.module.scss';
import Dropdown from '~/components/Dropdown';
import { handleDetail } from '../ProductDetail';
import { handleGetId } from '../UpdateProduct';

const cx = classNames.bind(styles);
const cv = classNames.bind(style);
const tb = classNames.bind(tables);

const ReadMore = ({ children }) => {
    const text = children;
    const limit = 5;

    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className={cx('table-results-service')}>
            <span className={cx('service-title')}>{isReadMore ? text.slice(0, limit) + '...' : text}</span>
            <Button link>
                <p className={cx('table-results-detail')} onClick={toggleReadMore}>
                    {isReadMore ? 'Xem thêm' : 'Rút gọn'}
                </p>
            </Button>
        </div>
    );
};

function ListProducts() {
    const [isProducts, setProducts] = useState([]);
    const [selected, setSelected] = useState('Mời chọn');
    const [isConnect, setIsConnect] = useState('Mời chọn');
    const options = ['Hoạt động', 'Ngưng hoạt động'];
    const connect = ['Hoạt động', 'Ngưng hoạt động'];

    useEffect(() => {
        onSnapshot(collection(db, 'products'), (snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('products-header')}>
                <h3>Danh sách thiết bị</h3>
                <div className={cx('products-header__option')}>
                    <div className={cx('products-header__option-selected')}>
                        <div className={cv('option-selected-children')}>
                            <label className={cv('header__option-selected-title')}>Trạng thái hoạt động</label>
                            <Dropdown selected={selected} setSelected={setSelected} options={options} medium />
                        </div>
                        <div>
                            <label className={cv('header__option-selected-title')}>Trạng thái kết nối</label>
                            <Dropdown selected={isConnect} setSelected={setIsConnect} options={connect} medium />
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
                                <th className={tb('idProduct')}>Mã thiết bị</th>
                                <th className={tb('nameProduct')}>Tên thiết bị</th>
                                <th className={tb('addressProduct')}>Địa chỉ IP</th>
                                <th className={tb('activeProduct')}>Trạng thái hoạt động</th>
                                <th className={tb('connectProduct')}>Trạng thái kết nối</th>
                                <th className={tb('serviceProduct')}>Dịch vụ sử dụng</th>
                                <th className={tb('detailProduct')}></th>
                                <th className={tb('updateProduct')}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {isProducts.map((product, index) => (
                                <tr
                                    className={index % 2 === 0 ? tb('table-results') : tb('table-change')}
                                    key={product.ip}
                                >
                                    <th>{product.code}</th>
                                    <td>{product.name}</td>
                                    <td>{product.ip}</td>
                                    <td>
                                        <div className={tb('notiResult')}>
                                            <span>
                                                {product.active === 'Ngưng hoạt động' ? (
                                                    <FontAwesomeIcon className={tb('offIcon')} icon={faCircle} />
                                                ) : (
                                                    <FontAwesomeIcon className={tb('onIcon')} icon={faCircle} />
                                                )}
                                            </span>

                                            <p>
                                                {product.active === 'Ngưng hoạt động' ? 'Ngưng hoạt động' : 'Hoạt động'}
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={tb('notiResult')}>
                                            <span>
                                                {product.connect === 'Ngưng kết nối' ? (
                                                    <FontAwesomeIcon className={tb('offIcon')} icon={faCircle} />
                                                ) : (
                                                    <FontAwesomeIcon className={tb('onIcon')} icon={faCircle} />
                                                )}
                                            </span>
                                            <p>{product.connect === 'Ngưng kết nối' ? 'Ngưng kết nối' : 'Kết nối'}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <ReadMore>{product.service}</ReadMore>
                                    </td>
                                    <td>
                                        <Button link to="/productDetail" onClick={() => handleDetail(product.id)}>
                                            <p className={cx('table-results-detail')}>Chi tiết</p>
                                        </Button>
                                    </td>
                                    <td>
                                        <Button link to="/updateProduct" onClick={() => handleGetId(product.id)}>
                                            <p className={cx('table-results-detail')}>Cập nhật</p>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Button navigate to="/addProduct">
                <FontAwesomeIcon icon={faSquarePlus} className={cx('iconPlus')} />
                <p className={cx('navigateProduct')}>Thêm thiết bị</p>
            </Button>
        </div>
    );
}

export default ListProducts;
