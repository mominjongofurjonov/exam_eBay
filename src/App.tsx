import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./components/navbar/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SinglePage from "./routes/singlePage/SinglePage";
import { useLocation } from "react-router-dom";
import ProductsCarousel from "./components/productsCarousel/ProductsCarousel";
import AllProducts from "./routes/allProducts/AllProducts";
import Laptops from "./routes/laptops/Laptops";
import Smartphones from "./routes/smartphones/SmartPhones";
import Sunglasses from "./routes/sunglasses/Sunglasses";
import Watches from "./routes/watches/Watches";
import Watchlist from "./routes/watchlist/Watchlist";
import Cart from "./routes/cart/Cart";
import Fragrances from "./routes/fragrances/Fragrances";
import Skincare from "./routes/skincare/Skincare";
import Groceries from "./routes/grocries/Grocries";
import HomeDecoration from "./routes/homeDecoration/HomeDecoration";
import NotFound from "./routes/notFound/NotFound";
import Furniture from "./routes/furniture/Furniture";
import Tops from "./routes/tops/Tops";
import WomensDress from "./routes/womens-dress/WomensDress";
import WomensShoes from "./routes/womens-shoes/WomensShoes";
import MensShirts from "./routes/mens-shirts/MensShirts";
import MensShoes from "./routes/mens-shoes/MensShoes";
import WomensWatches from "./routes/womens-watches/WomensWatches";
import WomensBags from "./routes/womens-bags/WomensBags";
import WomensJewellery from "./routes/womens-jewellery/WomansJewellery";
import Motorcycle from "./routes/motorcycle/Motorcycle";
import Lighting from "./routes/lighting/Lighting";
import PagesFooter from "./components/pagesFooter/PagesFooter";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
import { useSelector } from "react-redux";
import Admin from "./routes/admin/Admin";
import { ToastContainer } from 'react-toastify';
import DailyProducts from "./components/dailyProducts/DailyProducts";
import AdvertBanner from "./components/advertisementBanner/AdvertBanner";
import AutoMotive from "./routes/automotive/AutoMotive";
import { State } from "./types";

function App() {
  const { pathname } = useLocation();
  const token = useSelector((state : State) => state.actions.token);

  return (
    <>
      <ToastContainer />
      {pathname.startsWith("/login") || pathname.startsWith("/admin") || pathname.startsWith("/register") ? <></>  : <Nav />}
      {pathname === "/" && <Header />}
      {pathname === "/" && <ProductsCarousel />}
      {pathname === "/" && <AdvertBanner/>}
      {pathname === "/" && <DailyProducts/>}
      {pathname === "/" && <Footer />}

      <Routes>
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/mens-watches" element={<Watches />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/home-decoration" element={<HomeDecoration />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/womens-dresses" element={<WomensDress />} />
        <Route path="/womens-shoes" element={<WomensShoes />} />
        <Route path="/mens-shirts" element={<MensShirts />} />
        <Route path="/mens-shoes" element={<MensShoes />} />
        <Route path="/womens-watches" element={<WomensWatches />} />
        <Route path="/womens-bags" element={<WomensBags />} />
        <Route path="/womens-jewellery" element={<WomensJewellery />} />
        <Route path="/motorcycle" element={<Motorcycle />} />
        <Route path="/lighting" element={<Lighting />} />
        <Route path="/automotive" element={<AutoMotive/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {token && <Route path="/admin" element={<Admin />} />}
      </Routes>
      {pathname !== "/" && <PagesFooter />}
    </>
  );
}

export default App;
