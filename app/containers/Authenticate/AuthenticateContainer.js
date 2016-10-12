import React, { PropTypes } from 'react';
import { Authenticate } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActionCreators from 'redux/modules/users';

const AuthenticateContainer = React.createClass({
  propTypes: {
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  },
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  handleAuth (e) {
    e.preventDefault();
    this.props.fetchAndHandleAuthedUser()
        .then(() => this.context.router.replace('feed'));
  },
  render () {
    return (
        <Authenticate
            onAuth={this.handleAuth}
            isFetching={this.props.isFetching}
            error={this.props.error}/>
    );
  }
});

function mapStateToProps (state) {
  console.log('state: ', state);
  return {
    isFetching: state.isFetching,
    error: state.error
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer);
// export default connect(
//  (state) => ({isFetching: state.isFetching, error: state.error}),
//  (dispatch) => bindActionCreators(userActionCreators, dispatch)
// )(AuthenticateContainer);
