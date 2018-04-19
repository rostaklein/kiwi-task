import { connect } from "react-redux"

const Display = props =>
<input type="text" className="display" placeholder="Display" autoComplete="false" />

const mapStateToProps = state => state

export default connect(mapStateToProps)(Display);