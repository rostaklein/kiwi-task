import { Component } from "react"
import { connect } from "react-redux"
import "../styles/display.scss";

import keyboardKeys from '../constants/keyboardKeys';
import keydown, { ALL_KEYS } from 'react-keydown';
import onClickOutside from "react-onclickoutside";
class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        }
    }

    @keydown( ALL_KEYS )
    handleKeyDown(event){
        const
            numPressed = Number(event.key),
            validKeys = keyboardKeys.filter(key=>key.subs).map(key=>key.main);

        if(Number.isInteger(numPressed) && validKeys.includes(numPressed)){
            console.log(numPressed);   
        }
    }

    handleClickOutside = () => {
        this.setState({
            isActive: false
        })
    };

    render(){
        return(
            <div className="display" onClick={()=>this.setState({isActive: true})}>
                <span className="content">Some text</span>
                {
                    this.state.isActive &&
                    <span className="new"></span>
                }
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(onClickOutside(Display));