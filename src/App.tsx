import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ShoppingCartProvider from "./providers/ShoppingCartContext";

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/store", element: <Store /> },
    { path: "/about", element: <About /> },
  ];
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
