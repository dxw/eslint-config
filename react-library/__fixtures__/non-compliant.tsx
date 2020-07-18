import React from "react";

interface Props {
  test: string;
}

const ArrowFunctionComponent: React.FunctionComponent<Props> = (
  props
): JSX.Element => <div>{props.test}</div>;
