import { Route, Routes } from "react-router-dom";
import NewsFeed from "../../pages/newsFeed";
import Header from "../../components/header/header";
import Login from "../../pages/login/index";
const RoutePage = () => {
  let login = sessionStorage.getItem("login");
  console.log(login)
  if (login === null) {
    return (
      <div>
        {/* <Header
        /> */}
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<NewsFeed />} />
        </Routes>
      </div>
    );
  }
};

export default RoutePage;
