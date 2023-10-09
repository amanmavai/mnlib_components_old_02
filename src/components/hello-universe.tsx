import * as React from "react";
interface UniverseProps {
  name: string;
  size: string;
  expansion: number;
}
export function HelloUniverse(props: UniverseProps) {
  return <div>Hello Universe</div>;
}
