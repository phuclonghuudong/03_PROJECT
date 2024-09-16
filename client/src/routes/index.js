import HomePage from "../pages/HomePage";
import ProductPage from "./../pages/ProductPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/product",
    page: ProductPage,
    isShowHeader: true,
  },
];
