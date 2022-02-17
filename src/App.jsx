import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { useHistory } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import "./_app.scss";

const Layout = ({ children }) => {
  const [isSidebarVisible, toggleIsSidebarVisible] = useState(false);

  const handleToggleSidebar = () => toggleIsSidebarVisible((value) => !value);

  return (
    <>
      <Header onToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar isSidebarVisible={isSidebarVisible} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("./auth");
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path="/auth" exact>
        <LoginScreen />
      </Route>

      <Route path="/search" exact>
        <Layout>
          <h1>search results</h1>
        </Layout>
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
