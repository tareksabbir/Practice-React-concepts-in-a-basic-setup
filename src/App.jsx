import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavigationBar from "./NavFooter/NavigationBar";
import Footer from "./NavFooter/Footer";
import StateBasedForm from "./concept/Form/StateBasedForm";
import RefForm from "./concept/Form/RefForm";

const App = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <NavigationBar></NavigationBar>
      <StateBasedForm></StateBasedForm>
      <RefForm></RefForm>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default App;
