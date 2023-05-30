import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Layout from "./layout";
import Home from "./pages/home/home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import News from "./pages/news/News";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />

      </Routes>
    </Layout>
  );
}

export default App;
