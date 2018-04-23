import { connect } from "react-redux";
import Loader from "./Loader";

const Suggestions = props =>
<div className="suggestions-cont">
    {props.isLoading && <Loader />}
    <ul className="suggestions">
        {props.suggestions.length>0 ?
        (
            props.suggestions.map(sug=>
            <li key={sug}>
                {sug}
            </li>)
        )
        :
        <li className="no-value disabled">
            No suggestions
        </li>}
    </ul>
</div>

const mapStateToProps = ({ suggestions, isLoading }) => ({ suggestions, isLoading })

export default connect(mapStateToProps)(Suggestions);