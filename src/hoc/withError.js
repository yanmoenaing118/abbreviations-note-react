import React, { useEffect, useRef, useState } from "react";

const withError = (WrappedComponent, axios) => {
  return (props) => {
    let [error, setError] = useState(null);
    let mounted = useRef(false);

    useEffect(() => {
      mounted.current = true;
      axios.interceptors.request.use(
        (req) => {
          setError(null);
          return req;
        },
        (err) => {
          setError(err);
          return Promise.reject(err);
        }
      );
      axios.interceptors.response.use(
        (res) => {
          if (mounted.current) {
            setError(null);
          }
          return res;
        },
        (err) => {
          if (mounted.current) {
            setError(err);
          }
          return Promise.reject(err);
        }
      );

      return () => {
        mounted.current = false;
      };
    });

    const renderComponent = () => {
      if (error) {
        if (error.message === "Network Error") {
          return (
            <div>
              <p>Couldn't load data</p>
              <div>Check your internet connection!</div>
            </div>
          );
        }
      }
      return <WrappedComponent />;
    };

    return renderComponent();
  };
};

export default withError;
