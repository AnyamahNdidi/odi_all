import logo from './logo.svg';
import './App.css';
import FirstCom from './Component/FirstClass/FirstCom';
import SecondClass from './Component/SecondClass/SecondClass';
import ThirdClass from './Component/ThirdClass/ThirdClass';
import FouthClass from './Component/FouthClass/FouthClass';
import Fifthclass from './Component/FithClass/Fifthclass';
import ClassWork from './Component/ClassWork/ClassWork';
import TodayMovie from "./Component/TodayMovie/TodayMovie"
import HeaderNav from './Component/TodayMovie/HeaderNav/HeaderNav';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Stel from './Component/SteReg/Stel';
import Studentlog from './Component/SteReg/StudenLog/Studentlog';
import AdminPage from "./Component/SteReg/AdminPage/AdminPage";
import { AppProvider } from "../src/Component/SteReg/GlobalContext/GlobalContext"
import Footer from './Component/Footer/Footer';
import Details from './Component/Details/Details';
import Newproject from './Component/NewProject/Newproject';
import HeaderBar from './Component/NewProject/HeaderBar';
import FetchAppi from './Component/FetchApiPage/FetchAppi';
import WilmerHone from './Component/WilerHome/WilmerHone';
import WilDetails from './Component/WilerHome/WilDetails';


function App() {
  return (
    <div >
      {/* <FirstCom /> */}
      {/* <SecondClass /> */}
      {/* <ThirdClass /> */}
      {/* <FouthClass /> */}
      {/* <Fifthclass /> */}
      {/* <ClassWork /> */}
      <AppProvider>
        <Router>
          {/* <HeaderNav /> */}
          <HeaderBar />
          <Switch>
            <Route path="/" exact component={TodayMovie} />
            <Route path="/details" exact component={Details} />
            <Route path="/new" exact component={Newproject} />
            <Route path="/fetch" exact component={FetchAppi} />
            <Route path="/wil" exact component={WilmerHone} />
            <Route path="/wilde/:id" exact component={WilDetails} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </AppProvider>

    </div>
  );
}

export default App;
