import { useRoutes } from 'react-router-dom';
import Home from '../pages/home';


const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home/> },
      { path: '/home', element: <Home/> },
      { path: '/login', element: <div>Login</div> },
      { path: '/register', element: <div>Register</div> },
      { path: '/order', element: <div>Order</div> },
    ]);

    return routes;
}

export default AppRoutes;