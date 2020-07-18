import PropTypes from "prop-types";
import React from "react";

export const ArrowFunctionComponent = (props) => <div>{props.test}</div>;

ArrowFunctionComponent.propTypes = {
  test: PropTypes.string,
};

export function FunctionComponent(props) {
  return <div>{props.test}</div>;
}

FunctionComponent.propTypes = {
  test: PropTypes.string,
};

export class ClassComponent extends React.Component {
  static propTypes = {
    test: PropTypes.string,
  };

  render() {
    return <div>{this.props.test}</div>;
  }
}
