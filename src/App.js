import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddBlog from './Pages/Dashboard/AddBlog';
import Blogs from './Pages/Blog/Blogs';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="/dashboard/my-orders" element={<MyOrders />}></Route>
          <Route path="/dashboard/add-review" element={<AddReview />}></Route>
          <Route
            path="/dashboard/manage-users"
            element={
              <RequireAdmin>
                <ManageUsers />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manage-products"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manage-orders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/add-product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/add-blog"
            element={
              <RequireAdmin>
                <AddBlog />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-center" theme={'dark'} />
    </div>
  );
}

export default App;
