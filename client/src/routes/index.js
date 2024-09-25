import HomePage from "../pages/HomePage";
import ProductPage from "./../pages/ProductPage";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import CheckOrderPage from "../pages/CheckOrderPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import AccountPage from "./../pages/AccountPage/index";
import UpdateAccountPage from "../pages/UpdateAccountPage";

export const routes = [
  {
    path: "/",
    icon: "",
    showHeader: true,
    title: "Trang chủ",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/product",
    icon: "",
    showHeader: true,
    title: "Sản phẩm",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/dang-nhap",
    icon: "",
    showHeader: false,
    title: "Đăng nhập",
    page: LoginPage,
    isShowHeader: true,
  },
  {
    path: "/dang-ky",
    icon: "",
    showHeader: false,
    title: "Đăng ký",
    page: RegisterPage,
    isShowHeader: true,
  },
  {
    path: "/thanh-vien",
    icon: "",
    showHeader: false,
    title: "Thành viên",
    page: AccountPage,
    isShowHeader: true,
  },
  {
    path: "/thanh-vien/thong-tin",
    icon: "",
    showHeader: false,
    title: "Cập nhật thông tin",
    page: UpdateAccountPage,
    isShowHeader: true,
  },
  // {
  //   path: "/",
  //   icon: "",
  //   showHeader: true,
  //   title: "Sale Off",
  //   page: HomePage,
  //   isShowHeader: true,
  // },
  // {
  //   path: "/",
  //   icon: "",
  //   showHeader: true,
  //   title: "Tin Tức",
  //   page: HomePage,
  //   isShowHeader: true,
  // },
  // {
  //   path: "/",
  //   icon: "",
  //   showHeader: true,
  //   title: "Chính sách nhượng quyền",
  //   page: HomePage,
  //   isShowHeader: true,
  // },
  // {
  //   path: "/",
  //   icon: "",
  //   showHeader: true,
  //   title: "Hướng dẫn",
  //   page: HomePage,
  //   isShowHeader: true,
  // },
  // {
  //   path: "/",
  //   icon: "",
  //   showHeader: true,
  //   title: "Giới thiệu",
  //   page: HomePage,
  //   isShowHeader: true,
  // },
  // {
  //   path: "/",
  //   icon: "",
  //   showHeader: true,
  //   title: "Liên hệ",
  //   page: HomePage,
  //   isShowHeader: true,
  // },
  {
    path: "/kiem-tra-don-hang",
    icon: "",
    showHeader: false,
    title: "Kiểm tra đơn hàng",
    page: CheckOrderPage,
    isShowHeader: true,
  },
  {
    path: "/quen-mat-khau",
    icon: "",
    showHeader: false,
    title: "Quên mật khẩu",
    page: ForgotPasswordPage,
    isShowHeader: true,
  },
  {
    path: "/product-detail",
    icon: "",
    showHeader: true,
    title: "Chi tiết",
    page: ProductDetailPage,
    isShowHeader: true,
  },
  {
    path: "/gio-hang",
    icon: "",
    showHeader: false,
    title: "Giỏ hàng",
    page: CartPage,
    isShowHeader: true,
  },
];
