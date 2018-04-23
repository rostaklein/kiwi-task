import withRedux from "next-redux-wrapper";

import "../styles/main.scss";
import "../styles/phone.scss";
import { initStore } from "../store";
import Display from "../components/Display";
import Keyboard from "../components/Keyboard";
import Suggestions from "../components/Suggestions";

let Index = () =>
    <div className="phone">
        <Display />
        <Suggestions />
        <Keyboard />
    </div>
  
  
Index = withRedux(initStore, (state) => ({ state }))(Index);

export default Index;