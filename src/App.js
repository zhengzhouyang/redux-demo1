import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/productListing";
import ProductDetail from "./components/productDetail";
import "./App.css";

const Home = () => {
  return <h1>Click Me</h1>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/redux-demo1" element={<ProductListing />} />
          <Route
            path="/redux-demo1/product/:productId"
            element={<ProductDetail />}
          />
          <Route> 404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
