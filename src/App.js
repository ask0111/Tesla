import "./styles.css";
import { Route } from "react-router-dom";
import Scar from "./details/sCar";
import Xcar from "./details/xCar";
import Ycar from "./details/yCar";
import Tcar from "./details/3Car";
import SRcar from "./details/SRhome";
import SPcar from "./details/SPhome";
import Mapp from "./Mapp";
import Login from "./account/login";
import CreateAcc from "./account/createAcc";
import Dashboard from "./users/dashboard/dashboard";
import ProfileSettings from "./users/profile-settings/profile-setting";
import Paymentmethord from "./users/payment-methord/payment-methord";
import Payment from "./card-payment/card-payment";
import Charging from "./users/charging/charging";
import Orderhistory from "./users/order-history/order-history";
import Lootbox from "./users/loot-box/loot-box";
import Shop from "./shop/shop";
import Customapi from "./custom-order/custom-api";
import UserDatax from "./custom-order/userdatax";
import UserDatay from "./custom-order/userdatay";
import UserDatas from "./custom-order/userdatas";
import UserData3 from "./custom-order/userdata3";
import UserDataSP from "./custom-order/userdatasp";
import UserDataSR from "./custom-order/userdatasr";

export default function App(props) {
  return (
    <switch>
      <Route path="/" exact>
        <Mapp />
      </Route>
      <Route path="/models" exact>
        <Scar />
      </Route>
      <Route path="/modelx" exact>
        <Xcar />
      </Route>
      <Route path="/modely" exact>
        <Ycar />
      </Route>
      <Route path="/model3" exact>
        <Tcar />
      </Route>
      <Route path="/solarpanels" exact>
        <SPcar />
      </Route>
      <Route path="/solarroof" exact>
        <SRcar />
      </Route>
      <Route path="/signin" exact>
        <Login />
      </Route>
      <Route path="/signup" exact>
        <CreateAcc />
      </Route>
      <Route path="/teslaaccount" exact>
        <Dashboard />
      </Route>
      <Route path="/teslaaccount/profile-settings" exact>
        <ProfileSettings />
      </Route>
      <Route path="/teslaaccount/payment-methord" exact>
        <Paymentmethord />
      </Route>
      <Route path="/teslaaccount/charging" exact>
        <Charging />
      </Route>
      <Route path="/teslaaccount/loot-box" exact>
        <Lootbox />
      </Route>
      <Route path="/teslaaccount/order-history" exact>
        <Orderhistory />
      </Route>
      <Route path="/shop" exact>
        <Shop a={UserDatas()} b={UserData3()} c={UserDatax()} d={UserDatay()}/>
      </Route>
      <Route path="/models/inventory-s-series" exact>
        <Customapi props={UserDatas()} />
      </Route>
      <Route path="/model3/inventory-3-series" exact>
        <Customapi props={UserData3()} />
      </Route>
      <Route path="/modelx/inventory-x-series" exact>
        <Customapi props={UserDatax()} />
      </Route>
      <Route path="/modely/inventory-y-series" exact>
        <Customapi props={UserDatay()} />
      </Route>
      <Route path="/modelsr/inventory-solarroof-series" exact>
        <UserDataSP />
      </Route>
      <Route path="/modelsp/inventory-solarpanel-series" exact>
        <UserDataSR />
      </Route>
      <Route path="/card-payment" exact>
        <Payment />
      </Route>
    </switch>
  );
}
