import PropTypes from "prop-types";
import React from "react";

interface Props {
  test: string;
}

export const ArrowFunctionComponent: React.FunctionComponent<Props> = (
  props
): JSX.Element => <div>{props.test}</div>;

ArrowFunctionComponent.propTypes = {
  test: PropTypes.string,
};

export function FunctionComponent(props: Props): JSX.Element {
  return <div>{props.test}</div>;
}

FunctionComponent.propTypes = {
  test: PropTypes.string,
};

export class ClassComponent extends React.Component<Props> {
  static propTypes = {
    test: PropTypes.string,
  };

  render(): JSX.Element {
    return <div>{this.props.test}</div>;
  }
}
