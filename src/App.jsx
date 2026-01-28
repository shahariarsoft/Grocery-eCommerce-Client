import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Products from "./pages/Products";
import ProductCategory from './pages/ProductCategory';
import Cart from "./pages/Cart";
import Navbar from './components/Navbar';
import { useContext } from "react";
import { AppContext } from './context/AppContext';
import MyOrders from "./pages/MyOrders";
import Auth from './modals/Auth';
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import SingleProduct from './pages/SingleProduct';
import Address from './pages/Address';
import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from './pages/seller/SellerLayout';
import ProductList from './pages/seller/ProductList';
import AddProduct from './pages/seller/AddProduct';
import Orders from './pages/seller/Orders';




const App = () => {
  const { isSeller, showUserLogin }=useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div className="text-default min-h-screen">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Auth/> : null}
      <Toaster />
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:category" element={<ProductCategory />} />
                <Route path="/product/:category/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path="/add-address" element={<Address />} />


                <Route
                path="/seller"
                element={isSeller ? <SellerLayout /> : <SellerLogin/>}
                >
                  <Route
                  index
                  element={isSeller ? <AddProduct /> : null}
                  />
                  <Route
                  path="product-list"
                  element={isSeller ? <ProductList /> : null}
                  />
                  <Route
                  path="orders" element={isSeller ? <Orders /> : null }
                  />
                </Route>
            </Routes>
        </div>
        {isSellerPath?null : <Footer />}
    </div>
  );
};

export default App;


