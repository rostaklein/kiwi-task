import withRedux from "next-redux-wrapper";

import "../styles/main.scss";
import "../styles/phone.scss";
import { initStore } from "../store";
import Display from "../components/Display";
import Keyboard from "../components/Keyboard";

let Index = () =>
<div className="container">
    <div className="phone">
        <Display />
        <Keyboard />
    </div>
</div>
  
  
Index = withRedux(initStore, (state) => ({ state }))(Index);

export default Index;