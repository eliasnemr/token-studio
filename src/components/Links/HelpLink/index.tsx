import HelpSVG from "../../Images/HelpSVG";
import { Link } from "react-router-dom";

const HelpLink = () => {
  return (
    <Link
      to="/help"
      className="bg-neutral-100 text-black hover:cursor-pointer hover:bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-300 dark:font-bold dark:hover:bg-[#2C2C2C] rounded-full flex items-center h-[32px] w-[32px] justify-center"
    >
      <HelpSVG height={20} width={20} />
    </Link>
  );
};

export default HelpLink;
