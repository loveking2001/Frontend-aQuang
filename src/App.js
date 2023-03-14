import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import withErrorHandler from './hocs/withErrorHandler';
import LoadingPage from './components/LoadingPage';
import LoadingRequest from './components/LoadingRequest';
import ListBeacons from './pages/beacons/listBeacons';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LoadingRequest isShow={this.props.loading} />
        <LoadingPage isShow={this.props.isShowLoadingPage} />
        <ListBeacons></ListBeacons>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.ui.loading,
    isShowLoadingPage: state.ui.isShowLoadingPage,
    isRenderPages: state.ui.isRenderPages
  };
};

export default connect(mapStateToProps)(withErrorHandler(App));
