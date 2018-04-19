import { connect } from "react-redux"

const Display = props =>
<div>
    {JSON.stringify(props)}
</div>

const mapStateToProps = state => state

export default connect(mapStateToProps)(Display);