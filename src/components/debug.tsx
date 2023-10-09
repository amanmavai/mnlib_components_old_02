import * as React from "react";
interface Props {
  o: any;
  title?: string;
}

// Its good that we have all the styles here in style tag, this
// makes it very-very portable, doesn't depend on any styling solution
// doesn't mean everything needs to be like this, but some components
// can have this luxury
export function Debug({o, title = "STATE"}: Props) {
  return (
    <div
      style={{
        margin: "3rem 0",
        borderRadius: 4,
        background: "#f6f8fa",
        boxShadow: "0 0 1px #eee inset",
        color: "blue",
      }}
    >
      <div
        style={{
          fontSize: 11,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          fontWeight: 500,
          padding: "0.5rem",
          background: "#555",
          color: "#fff",
          letterSpacing: "1px",
        }}
      >
        {title}
        <pre
          style={{
            fontSize: "0.65rem",
            padding: "0.25rem 0.5rem",
          }}
        >
          {JSON.stringify(o, null, 2)}
        </pre>
      </div>
    </div>
  );
}
