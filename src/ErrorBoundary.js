import React from "react";
import { Link, navigate } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStatefromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error Boundary has caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => (navigate("/"), 5000));
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this Listing <Link to="/">Click here</Link> to
          go back to home page or wait for 5 seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
