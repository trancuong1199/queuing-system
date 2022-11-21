import classNames from 'classnames/bind';
import { AiFillCaretRight } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import 'flatpickr/dist/themes/confetti.css';
import Flatpickr from 'react-flatpickr';

import db from '~/components/Firebase';
import Button from '~/components/Button';
import styles from '~/pages/Products/ListProducts/ListProducts.module.scss';
import style from '~/components/Dropdown/Dropdown.module.scss';
import stylesMain from './ListServices.module.scss';
import tables from '~/components/Table/Table.module.scss';
import Dropdown from '~/components/Dropdown';
import { handleGetId } from '../UpdateService';
import { handleDetail } from '../DetailService';

const cx = classNames.bind(styles);
const cv = classNames.bind(style);
const tb = classNames.bind(tables);
const cm = classNames.bind(stylesMain);

function ListServices() {
    const [isSevices, setServices] = useState([]);
    const [date, setDate] = useState(new Date());
    const [nextDate, setNextDate] = useState(new Date());

    const [selected, setSelected] = useState('Mời chọn');
    const options = ['Hoạt động', 'Ngưng hoạt động'];

    useEffect(() => {
        onSnapshot(collection(db, 'services'), (snapshot) => {
            setServices(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('products-header')}>
                <h3>Quản lí dịch vụ</h3>
                <div className={cx('products-header__option')}>
                    <div className={cx('products-header__option-selected')}>
                        <div className={cv('option-selected-children')}>
                            <label className={cv('header__option-selected-title')}>Trạng thái hoạt động</label>
                            <Dropdown selected={selected} setSelected={setSelected} options={options} medium />
                        </div>
                        <div>
                            <label className={cv('header__option-selected-title')}>Chọn thời gian</label>
                            <div className={cm('service-date')}>
                                <div className={cm('service-date-children')}>
                                    <Flatpickr
                                        value={date} // giá trị ngày tháng
                                        // các option thêm cho thư viện
                                        options={{
                                            dateFormat: 'd-m-Y', // format ngày giờ
                                        }}
                                        // event
                                        onChange={(dateSelect) => setDate(dateSelect)}
                                        className={cm('service-input')}
                                    />

                                    <MdDateRange className={cm('date-icon')} />
                                </div>

                                <AiFillCaretRight className={cm('service-icon')} />
                                <div className={cm('service-date-children')}>
                                    <Flatpickr
                                        value={nextDate} // giá trị ngày tháng
                                        // các option thêm cho thư viện
                                        options={{
                                            dateFormat: 'd-m-Y', // format ngày giờ
                                        }}
                                        // event
                                        onChange={(dateSelect) => setNextDate(dateSelect)}
                                        className={cm('service-input')}
                                    />
                                    <MdDateRange className={cm('date-icon')} />
                                </div>
                            </div>
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
                                <th className={tb('idProduct')}>Mã dịch vụ</th>
                                <th className={tb('nameProduct')}>Tên dịch vụ</th>
                                <th className={tb('addressProduct')}>Mô tả</th>
                                <th className={tb('activeProduct')}>Trạng thái hoạt động</th>
                                <th className={cm('detailService')}></th>
                                <th className={cm('updateService')}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {isSevices.map((service, index) => (
                                <tr
                                    className={index % 2 == 0 ? tb('table-results') : tb('table-change')}
                                    key={service.code}
                                >
                                    <th>{service.code}</th>
                                    <th className={cm('fixFont')}>{service.name}</th>
                                    <th className={cm('fixFont')}>{service.description}</th>
                                    <td>
                                        <div className={tb('notiResult')}>
                                            <span>
                                                {service.status === 'Ngưng hoạt động' ? (
                                                    <FontAwesomeIcon className={tb('offIcon')} icon={faCircle} />
                                                ) : (
                                                    <FontAwesomeIcon className={tb('onIcon')} icon={faCircle} />
                                                )}
                                            </span>

                                            <p>
                                                {service.status === 'Ngưng hoạt động' ? 'Ngưng hoạt động' : 'Hoạt động'}
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <Button link to="/detailService">
                                            <p
                                                className={cx('table-results-detail')}
                                                onClick={() => handleDetail(service.id)}
                                            >
                                                Chi tiết
                                            </p>
                                        </Button>
                                    </td>
                                    <td>
                                        <Button link to="/updateService">
                                            <p
                                                className={cx('table-results-detail')}
                                                onClick={() => handleGetId(service.id)}
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

            <Button navigate to="/addService">
                <FontAwesomeIcon icon={faSquarePlus} className={cx('iconPlus')} />
                <p className={cx('navigateProduct')}>Thêm dịch vụ</p>
            </Button>
        </div>
    );
}

export default ListServices;
