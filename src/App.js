import "./App.css";
import Chart1 from "./components/Charts/Chart1";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App bg-blue-500">
      <Navbar />
      <SideBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
