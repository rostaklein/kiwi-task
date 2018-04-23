import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "./Loader";
import { addToSentence } from "../store/actions/sentence";

const Suggestions = props =>
<div className="suggestions-cont">
    {props.isLoading && <Loader />}
    <ul className="suggestions">
        {props.suggestions.length>0 ?
        (
            props.suggestions.map(sug=>
            <li key={sug} onClick={()=>props.addWord(sug)}>
                {sug}
            </li>)
        )
        :
        <li className="no-value disabled">
            No suggestions
        </li>}
    </ul>
</div>

const mapStateToProps = ({ suggestions, isLoading }) => ({ suggestions, isLoading });

const mapDispatchToProps = dispatch => ({
    addWord: bindActionCreators(addToSentence, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);