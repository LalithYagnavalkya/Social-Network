import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { ScrollToTop, Navbar, Header } from "./components";
import { ErrorPage, HomePage, ProfilePage } from "./pages";

function App() {
  return (
    <Wrapper>
      <Router>
        <ScrollToTop />
        <Header />
        <div className="page">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Navbar />
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
    left: 100px;
    margin-top: 45px;
    margin-bottom: 45px;
    z-index: -1;
  }
`;
export default App;
