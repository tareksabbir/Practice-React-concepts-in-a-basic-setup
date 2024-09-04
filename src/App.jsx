import { Outlet } from "react-router-dom";
import NavigationBar from "./NavFooter/NavigationBar";
import Footer from "./NavFooter/Footer";

const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
