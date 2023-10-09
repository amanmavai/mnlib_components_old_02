import * as React from "react";
export interface AtomProps {
  name: string;
  size: string;
  spin: number;
}

export function HelloAtom(props: AtomProps) {
  return <div className="text-5xl text-green-500">Hello Atom</div>;
}
