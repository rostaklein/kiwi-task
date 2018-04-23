import keyboardKeys from '../constants/keyboardKeys';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addLetter, removeLastLetter } from '../store/actions/letters';

const Keyboard = props =>
            <div className="keyboard">
                {
                    keyboardKeys.map(key => 
                        <div key={key.main} className={"key "+(!key.subs ? "disabled" : "")} onClick={key.subs && (()=>props.addLetter(key.main))}>
                            <div className="main">{key.main}</div>
                            {key.subs &&
                                <div className="subs">
                                {
                                    key.subs.map(sub => 
                                        <span key={sub}>{sub==" " ? "space" : sub}</span>
                                    )
                                }
                                </div>
                            }
                        </div>
                    )
                }
                <div className="key disabled">
                    <div className="main">*</div>
                </div>
                <div className="key">
                    <div className="subs space">space</div>
                </div>
                <div className="key" onClick={()=>props.removeLetter()}>
                    <div className="main back"><i className="fa fa-long-arrow-left"></i></div>
                </div>
            </div>   

const mapDispatchToProps = dispatch => ({
    addLetter: bindActionCreators(addLetter, dispatch),
    removeLetter: bindActionCreators(removeLastLetter, dispatch)
});

export default connect(null, mapDispatchToProps)(Keyboard);