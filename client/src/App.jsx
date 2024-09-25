import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./components/DefaultComponent/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as UserService from "./services/User.Services";
import { loginSuccess } from "./redux/authSlice";
import { jwtDecode } from "jwt-decode";

function App() {
  const user = useSelector((state) => state.auth.login);

  const dispatch = useDispatch();

  useEffect(async () => {
    const { storageData, decode } = await handleDecode();
    if (decode?.id) {
      await handleGetDetailUser(decode?.id, storageData);
    }
  }, []);

  const handleDecode = async () => {
    let storageData = localStorage.getItem("access_token");
    let decode = {};

    decode = jwtDecode(storageData);

    return { storageData, decode };
  };

  const handleGetDetailUser = async (id, token) => {
    const result = await UserService.getDetailUser(id, token);
    dispatch(loginSuccess({ USER: result?.data?.DT, ACCESS_TOKEN: token }));
  };

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date();
      const { storageData, decode } = await handleDecode();

      if (decode?.exp < currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken();

        if (data?.EC === 0) {
          localStorage.setItem("access_token", data?.DT?.ACCESS_TOKEN);
          await handleGetDetailUser(decode?.id, data?.DT?.ACCESS_TOKEN);

          config.headers["authorization"] = "Bearer " + data?.DT?.ACCESS_TOKEN;
        }
      }

      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return (
    <div style={{ background: "#fff" }}>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
