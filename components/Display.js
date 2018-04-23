import { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { addLetter, removeLastLetter } from '../store/actions/letters';
import "../styles/display.scss";

import { validNumbers } from '../constants/keyboardKeys';
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
            numPressed = Number(event.key);

        if(event.which==8){
            return this.props.removeLetter();
        }
        if(Number.isInteger(numPressed) && validNumbers.includes(numPressed)){
            return this.props.addLetter(numPressed);   
        }
    }

    handleClickOutside = () => {
        this.setState({
            isActive: false
        })
    };

    render(){
        return(
            <div className={"display" + (this.props.sentence.length==0 ? " no-content" : "")} onClick={()=>this.setState({isActive: true})}>
                <div className="content">
                    <span className="sentence">
                        {this.props.sentence.length>0 && this.props.sentence}
                    </span>
                    <span className="numbers">{this.props.numbers.length>0 ? this.props.numbers : "Press any key."}</span>
                    {
                        this.state.isActive &&
                        <span className="new"></span>
                    }
                </div>  
            </div>
        )
    }
}

const mapStateToProps = ({ numbers, sentence }) => ({
    numbers,
    sentence
});
const mapDispatchToProps = dispatch => ({
    addLetter: bindActionCreators(addLetter, dispatch),
    removeLetter: bindActionCreators(removeLastLetter, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(Display));