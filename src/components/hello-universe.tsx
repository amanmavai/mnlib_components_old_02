import * as React from "react";
interface UniverseProps {
  name: string;
  size: string;
  expansion: number;
}
export function HelloUniverse(props: UniverseProps) {
  return <div className="text-9xl text-red-400">Hello Universe</div>;
}
