import { useContext } from "react";
import { appContext } from "../../../AppContext";

export default function BlockCount() {
  const { blockNumber } = useContext(appContext);

  const formattedBlockNumber =
    blockNumber != null
      ? new Intl.NumberFormat("en-US", {
          useGrouping: true,
          maximumFractionDigits: 0,
        }).format(blockNumber)
      : "N/A";



  return (
    <div className="mt-1 font-medium md:text-xs">
      <span className="flex">
        <div className="gradient-border flex items-center bg-white text-black dark:bg-black dark:text-white">
          Block:{" "}
          {!blockNumber && (
            <div className="bg-muted rounded-full animate-pulse ml-2 h-[14px] w-[43px]" />
          )}
          {blockNumber && (
            <span className="ml-1 font-bold text-orange dark:text-lightOrange">
              {formattedBlockNumber}
            </span>
          )}
        </div>
      </span>
    </div>
  );
}
