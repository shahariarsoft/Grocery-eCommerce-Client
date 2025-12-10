import { Routers, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path= "/" element={<Home />} />
                    <Route path= "/products" element={<Products />} />
                    <Route path= "/product/:id" element={<ProductCategory />} />
                    <Route path= "/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
};
export default App;
