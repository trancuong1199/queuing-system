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
import ServiceDetail from '~/pages/Service/ServiceDetail';

// Public routes
const publicRoutes = [
    { path: '/signin', component: SignIn },
    { path: '/confirmPassword', component: ConfirmPassword },
    { path: '/changePassword', component: ChangePassword },
];

// Private routes
const privateRoutes = [
    { path: '/dashboard', component: Dashboard, layout: null },
    { path: '/number', component: Number },
    { path: '/user', component: User },
    { path: '/listProducts', component: ListProducts },
    { path: '/addProduct', component: AddProduct },
    { path: '/productDetail', component: ProductDetail },
    { path: '/updateProduct', component: UpdateProduct },
    { path: '/listServices', component: ListServices },
    { path: '/serviceDetail', component: ServiceDetail },
];

export { publicRoutes, privateRoutes };
