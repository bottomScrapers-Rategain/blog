import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdvertisingProvider from "./Contexts/advertisingProvider";
import UserProvider from "./Contexts/userProvider";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Post from "./Pages/Post";
import UserDashboard from "./Pages/UserDashboard";
function App() {
  return (
    <>
      <AdvertisingProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/post/:slug" element={<Post />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/dashboard/:uid" element={<UserDashboard />}></Route>
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </AdvertisingProvider>
    </>
  );
}

export default App;
