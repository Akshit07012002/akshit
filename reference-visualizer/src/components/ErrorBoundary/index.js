/* eslint-disable react/no-unused-state */
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.warn(error); // Remove this line if not required.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.error("errorInfo ", errorInfo);
    throw new Error(errorInfo);
  }

  render() {
    const { hasError } = this?.state || {};
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    const { children } = this?.props || {};
    return children;
  }
}

export default ErrorBoundary;
