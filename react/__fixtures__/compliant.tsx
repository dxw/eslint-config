import React from "react";

interface Props {
  test: string;
}

export const ArrowFunctionComponent: React.FunctionComponent<Props> = (
  props
): JSX.Element => <div>{props.test}</div>;

export function FunctionComponent(props: Props): JSX.Element {
  return <div>{props.test}</div>;
}

export class ClassComponent extends React.Component<Props> {
  render(): JSX.Element {
    return <div>{this.props.test}</div>;
  }
}
