// import HomePage from "../pages/HomePage";
// import ProductPage from "../pages/ProductPage";
// import OrderPage from "../pages/OrderPage";
// import NotFoundPage from "../pages/NotFoundPage";
// import TypeProductPage from "../pages/TypeProductPage";
// import SignInPage from "../pages/SignInPage";
// import SignUpPage from "./../pages/SignUpPage";
// import ProductDetailPage from "./../pages/ProductDetailPage";

export const routes = [
  {
    path: "/",
    page: "HomePage",
    isShowHeader: true,
  },
  {
    path: "/product",
    page: "ProductPage",
    isShowHeader: true,
  },
  {
    path: "/order",
    page: "OrderPage",
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
