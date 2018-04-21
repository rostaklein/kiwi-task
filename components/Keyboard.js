import React from 'react'
import keyboardKeys from '../constants/keyboardKeys';

const initState = {
    keyClicked: null,
    clickedTimes: 0
};

class Keyboard extends React.Component{
    constructor(props){
        super(props);
        this.state = initState;
    }

    componentWillMount() {
        this.timer = null;
    }

    toggle = () => {
        console.log(this.state.keyClicked.subs[this.state.clickedTimes-1]);
        this.setState(initState);
    }

    keyClicked = key => {
        this.setState({
            keyClicked: key,
            clickedTimes: this.state.clickedTimes+1
        })
        clearTimeout(this.timer);
        console.log(this.state.clickedTimes);
        if(this.state.clickedTimes < key.subs.length){
            this.timer = setTimeout(()=>this.toggle(key), 1000);
        }else{
            this.toggle(key);
        }
        
    }

    render(){
        return(
            <div className="keyboard">
            {
                keyboardKeys.map(key => 
                    <div key={key.main} className={"key "+(!key.subs ? "disabled" : "")} onClick={key.subs && (()=>this.keyClicked(key))}>
                        <div className="main">{key.main}</div>
                        {key.subs &&
                            <div className="subs">
                            {
                                key.subs.map(sub => 
                                    <span key={sub}>{sub}</span>
                                )
                            }
                            </div>
                        }
                    </div>
                )
            }
        </div>
        )
    }
}        

export default Keyboard;