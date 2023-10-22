import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type DropdownItem = {
  id: string;
  element: React.ReactNode;
};
type MenuListProps = {
  trigger: React.ReactNode;
  label: React.ReactNode;
  items: DropdownItem[];
};

export function MenuList({trigger, label, items}: MenuListProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {label && (
          <>
            <DropdownMenuLabel className="font-normal">{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuGroup>
          {items.map((item) => {
            return <DropdownMenuItem key={item.id}>{item.element}</DropdownMenuItem>;
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
