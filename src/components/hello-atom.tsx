import * as React from "react";
export interface AtomProps {
  name: string;
  size: string;
  spin: number;
}

export function HelloAtom(props: AtomProps) {
  return <div>Hello Atom</div>;
}
