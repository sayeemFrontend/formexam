import "./App.css";
import Layout from "./layout/Layout";
import ScrollToTop from "./methods/scrollTo/ScrollToTop";

function App() {
  return (
    <div className="app bg-primary-50">
      <ScrollToTop />
      <Layout />
    </div>
  );
}

export default App;
