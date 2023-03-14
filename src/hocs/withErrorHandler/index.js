import React, { Component } from 'react';
import Popup from '../../components/Popup/Popup';
import Http from '../../utils/HttpUtils';
import { API_R_500, API_R_400 } from '../../constants';

const withErrorHandler = (WrappedComponent) => {
  return class extends Component {
    state = {
      error: null,
      isOpen: false
    };

    componentDidMount() {
      this.reqInterceptor = Http.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = Http.interceptors.response.use(
        (res) => {
          return res;
        },
        (error) => {
          if (error.response && error.response.status === API_R_400) {
            this.setState({ error: 'Bad Request', isOpen: true });
          } else if (error.response && error.response.status === API_R_500) {
            this.setState({ error: 'Internal Server Error', isOpen: true });
          }
        }
      );
    }

    componentWillUnmount() {
      Http.interceptors.request.eject(this.reqInterceptor);
      Http.interceptors.response.eject(this.resInterceptor);
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error: error, isOpen: errorInfo });
    }

    onClickOK = () => {
      this.setState({ error: null, isOpen: false });
    };

    render() {
      const title = (
        <span className="text-danger">
          <i className="fa fa-times-circle " /> Error
        </span>
      );

      return (
        <React.Fragment>
          <Popup
            type={'message'}
            title={title}
            isOpen={this.state.isOpen}
            toggle={this.onClickOK}
            content={
              <div className="d-flex align-items-center text-danger">
                <i className="fa fa-times-circle fa-2x mr-4" />{' '}
                {this.state.error ? this.state.error : ''}
              </div>
            }
          />
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
