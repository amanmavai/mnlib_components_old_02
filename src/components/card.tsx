import * as React from "react";
import {cn} from "../lib/utils";

export type CardProps = {
  title: React.ReactNode;
  imgElement: React.ReactNode;
  cardBodyElement: React.ReactNode;
  cardActionElements: React.ReactNode[];
  className?: string;
};

export function Card({title, imgElement, cardBodyElement, cardActionElements, className}: CardProps) {
  return (
    <div className={cn("tw-card tw-card-compact bg-base-100 shadow-xl", className)}>
      <figure>{imgElement}</figure>
      <div className="tw-card-body">
        <h2 className="tw-card-title">{title}</h2>
        {cardBodyElement}
        <div className="tw-card-actions justify-end">{cardActionElements}</div>
      </div>
    </div>
  );
}
