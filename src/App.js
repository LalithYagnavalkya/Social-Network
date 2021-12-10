import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import { ScrollToTop, Navbar, Header } from "./components";
import { LoginPage, ErrorPage, HomePage, ProfilePage, AddPost } from "./pages";
import LoginSuccess from "./container/LoginSuccess";
import { useAuthContext } from "./context/user_context";

function App() {
  const { isUserAuthenticated } = useAuthContext();
  return (
    <Wrapper>
      {isUserAuthenticated ? <Header /> : null}
      <Router>
        <Routes>
          <Route
            path="/login"
            element={isUserAuthenticated ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/"
            element={isUserAuthenticated ? <HomePage /> : <LoginPage />}
          />
          <Route
            path="/addpost"
            element={isUserAuthenticated ? <AddPost /> : <LoginPage />}
          />
          <Route
            path="/profile"
            element={isUserAuthenticated ? <ProfilePage /> : <LoginPage />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route exact path="login/success" element={<LoginSuccess />}></Route>
        </Routes>
        {isUserAuthenticated ? <Navbar /> : null}
      </Router>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  .page {
    height: 100%;
    margin-top: 45px;
    margin-bottom: 45px;
    z-index: -1;
  }
`;
export default App;
