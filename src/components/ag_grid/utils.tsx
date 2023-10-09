import React from "react";
import {getTotalRowCount, getFilteredRowCountValue} from "./table";
import {IStatusPanelParams} from "ag-grid-community";
import {cn} from "../../lib/utils";
interface PanelParams extends IStatusPanelParams {
  label: React.ReactNode;
}

export const CustomTotalAndFilteredRowCount = (props: PanelParams) => {
  const [totalCount, setTotalCount] = React.useState(0);
  const [filteredCount, setFilteredCount] = React.useState(0);

  React.useEffect(() => {
    props.api.addEventListener("modelUpdated", updateCounts);
    updateCounts();

    return () => {
      props.api.removeEventListener("modelUpdated", updateCounts);
    };
  }, [props.api]);

  function updateCounts() {
    setTotalCount(getTotalRowCount(props.api));
    setFilteredCount(getFilteredRowCountValue(props.api));
  }

  let value;
  if (filteredCount === totalCount) {
    value = `${totalCount}`;
  } else {
    value = `${filteredCount} of ${totalCount}`;
  }

  return <LabelValue label={props.label || "Rows"} value={value} className={"py-2"} />;
};

interface Props {
  label: React.ReactNode;
  value: React.ReactNode;
  uom?: string;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
}

export function LabelValue({label, value, uom, className, labelClassName, valueClassName}: Props) {
  return (
    <div className={cn("flex items-baseline", className)}>
      <div className={cn("text-sm font-medium uppercase", labelClassName)}>{label}</div>
      <div className={cn("ml-2 text-lg font-semibold", valueClassName)}>{value}</div>
      {uom && <div className="ml-1 text-xs">{uom}</div>}
    </div>
  );
}
