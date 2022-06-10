import { Route, Routes } from "react-router-dom";
import AddReview from "./Components/AddReview/AddReview";
import Login from "./Components/Auth/Login/Login";
import Blog from "./Components/Blog/Blog";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project/:projectId" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
