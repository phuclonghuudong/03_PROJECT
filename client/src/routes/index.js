import HomePage from "../pages/HomePage";
import ProductPage from "./../pages/ProductPage";
import LoginPage from "./../pages/LoginPage";
import SignUpPage from "./../pages/SignUpPage";
import { DownOutlined } from "@ant-design/icons";
import CheckOrderPage from "../pages/CheckOrderPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

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
    page: SignUpPage,
    isShowHeader: true,
  },
  {
    path: "/",
    icon: "",
    showHeader: true,
    title: "Sale Off",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/",
    icon: "",
    showHeader: true,
    title: "Tin Tức",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/",
    icon: "",
    showHeader: true,
    title: "Chính sách nhượng quyền",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/",
    icon: "",
    showHeader: true,
    title: "Hướng dẫn",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/",
    icon: "",
    showHeader: true,
    title: "Giới thiệu",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/",
    icon: "",
    showHeader: true,
    title: "Liên hệ",
    page: HomePage,
    isShowHeader: true,
  },
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
];
