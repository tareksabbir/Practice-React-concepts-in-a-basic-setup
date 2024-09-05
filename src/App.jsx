import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavigationBar from "./NavFooter/NavigationBar";
import Footer from "./NavFooter/Footer";


const App = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <NavigationBar></NavigationBar>
     
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default App;
