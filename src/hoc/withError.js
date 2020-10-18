import React from "react";

const withError = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null,
    };

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use(
        (req) => req,
        (err) => {
          this.setState({ error: err });
        }
      );
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (err) => {
          this.setState({ error: err });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    renderComponent() {
      if (this.state.error) {
        if (this.state.error.message === "Network Error") {
          return (
            <div>
              <p>Couldn't load data</p>
              <div>Check your internet connection!</div>
            </div>
          );
        }
      }
      return <WrappedComponent />;
    }

    render() {
      return this.renderComponent();
    }
  };
};

export default withError;
