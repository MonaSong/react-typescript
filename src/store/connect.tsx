import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions'
const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(actions, dispatch)
    }
}

const ConnectComponent = (component) => (
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(component)
)

export default ConnectComponent