import Dashboard from '~/pages/Dashboard';
import Number from '~/pages/Number';
import User from '~/pages/User';
import SignIn from '~/pages/SignIn';
import ConfirmPassword from '~/pages/ConfirmPassword';
import ChangePassword from '~/pages/ChangePassword';

// Products
import AddProduct from '~/pages/Products/AddProduct';
import ProductDetail from '~/pages/Products/ProductDetail';
import UpdateProduct from '~/pages/Products/UpdateProduct';
import ListProducts from '~/pages/Products/ListProducts';

// Services
import ListServices from '~/pages/Service/ListServices';
import AddService from '~/pages/Service/AddService';
import UpdateService from '~/pages/Service/UpdateService';
import DetailService from '~/pages/Service/DetailService';

//Accounts
import AddAccount from '~/pages/Accounts/AddAccount';
import ListAccounts from '~/pages/Accounts/ListAccounts';

// Public routes
const publicRoutes = [];

// Private routes
const privateRoutes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/number', component: Number },
    { path: '/user', component: User },

    // Product
    { path: '/listProducts', component: ListProducts },
    { path: '/addProduct', component: AddProduct },
    { path: '/productDetail', component: ProductDetail },
    { path: '/updateProduct', component: UpdateProduct },
    { path: '/listServices', component: ListServices },

    // Service
    { path: '/addService', component: AddService },
    { path: '/updateService', component: UpdateService },
    { path: '/detailService', component: DetailService },
    { path: '/detailService', component: DetailService },

    // Account
    { path: '/addAccount', component: AddAccount },
    { path: '/listAccounts', component: ListAccounts },

    { path: '/', component: SignIn, layout: null },
    { path: '/confirmPassword', component: ConfirmPassword, layout: null },
    { path: '/changePassword', component: ChangePassword, layout: null },
];

export { publicRoutes, privateRoutes };
