import useFormatMinimaNumber from "../../utils/useMakeNumber";
import AnimatePageIn from "../Animate/AnimatePageIn";

interface Props {
  url: string;
  name: string;
  amount: string;
}
const PreviewToken = ({ url, name, amount }: Props) => {
  const { makeMinimaNumber } = useFormatMinimaNumber();

  return (
    <AnimatePageIn display={true}>
      <div className="grid grid-cols-[auto_1fr] items-center bg-white dark:bg-[#1B1B1B] rounded shadow-inner">
        <div className={`${!url.includes("data:image") ? "w-48 h-48" : "w-12 h-12"} aspect-square overflow-hidden mr-2`}>
          <img src={url} alt="preview" className="w-full h-full" />
        </div>
        <div className="overflow-hidden flex flex-col">
          
            <h6 className="font-bold text-left truncate dark:text-neutral-300">
              {(name.length && name) || "Untitled token"}
            </h6>
            <input
              readOnly
              value={
                (amount.length && makeMinimaNumber(amount, 2000)) || "200000000"
              }
              className="truncate w-full text-left focus:outline-none bg-transparent text-sm tracking-wider dark:text-neutral-300"
            />
        </div>
      </div>
    </AnimatePageIn>
  );
};

export default PreviewToken;

// className="bg-[#080A0B] w-[56px] min-w-[56px] h-[56px] min-h-[56px]"
