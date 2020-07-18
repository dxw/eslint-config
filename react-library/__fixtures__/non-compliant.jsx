import React from "react";

const ArrowFunctionComponent = (props) => <div>{props.test}</div>;

function FunctionComponent(props) {
  return <div>{props.test}</div>;
}

class ClassComponent extends React.Component {
  render() {
    return <div>{this.props.test}</div>;
  }
}
