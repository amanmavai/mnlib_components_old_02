"use client";

import * as React from "react";
import {Check, ChevronsUpDown} from "lucide-react";

import {cn} from "../lib/utils";
import {Button} from "./ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "./ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";
export const DEFAULT_OPTION: OptionType = {id: "default_option_id", value: "", label: "Select..."};

type RawValue = string | number;
type OptionType = {
  id: string;
  label: React.ReactNode;
  value: RawValue;
};

type ComboboxProps = {
  options: OptionType[];
  // called when an option is selected
  onSelect?: (option: OptionType) => void;
  value?: RawValue;
};

export function Combobox({options, onSelect, value: controlledValue}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setValue] = React.useState("");

  const isControlled = typeof controlledValue != "undefined";
  const value = isControlled ? controlledValue : internalValue;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? options.find((option) => option.value === value)?.label : DEFAULT_OPTION.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search ..." />
          <CommandEmpty>No Option found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.id}
                onSelect={(currentValue) => {
                  onSelect?.(option);
                  if (!isControlled) {
                    setValue(currentValue === value ? "" : currentValue);
                  }
                  setOpen(false);
                }}
              >
                <Check className={cn("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0")} />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function useCombobox(initialOption: OptionType = DEFAULT_OPTION) {
  const [selectedOption, setSelectedOption] = React.useState(initialOption);

  function handleSelect(option: OptionType) {
    setSelectedOption(option);
  }

  return {selectedValue: selectedOption.value, selectedOption, handleSelect};
}
