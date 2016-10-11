import React, { PropTypes } from 'react';
import { Authenticate } from 'components';
import auth from 'helpers/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActionCreators from 'redux/modules/users';

const AuthenticateContainer = React.createClass({
  propTypes: {
    fetchingUser: PropTypes.func.isRequired,
    fetchingUserFailure: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  },
  handleAuth () {
    const that = this;
    this.props.fetchingUser();
    auth().then((user) => {
      that.props.fetchingUserSuccess(user.uid, user, Date.now());
      that.props.authUser(user.uid);
    }).catch((error) => that.props.fetchingUserFailure(error));
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
  return {
    isFetching: state.isFetching,
    error: state.error
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(userActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer);
// export default connect(
//  (state) => ({isFetching: state.isFetching, error: state.error}),
//  (dispatch) => bindActionCreators(userActionCreators, dispatch)
// )(AuthenticateContainer);
