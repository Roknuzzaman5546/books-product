import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div>
            <ToastContainer position="top-right" autoClose={2000} />
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;