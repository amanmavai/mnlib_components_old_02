import * as React from "react";
import {cn} from "../lib/utils";

export type CardProps = {
  title: React.ReactNode;
  imgUrl: string;
  cardBodyElement: React.ReactNode;
  cardActionElements: React.ReactNode[];
  className?: string;
};

export function Card({title, imgUrl, cardBodyElement, cardActionElements, className}: CardProps) {
  return (
    <div className={cn("tw-card tw-card-compact bg-base-100 shadow-xl", className)}>
      <figure>
        <img src={imgUrl} alt="alt" />
      </figure>
      <div className="tw-card-body">
        <h2 className="tw-card-title">{title}</h2>
        {cardBodyElement}
        <div className="tw-card-actions justify-end">{cardActionElements}</div>
      </div>
    </div>
  );
}
