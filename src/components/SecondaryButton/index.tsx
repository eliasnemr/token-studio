import { MouseEventHandler, ReactNode } from "react";

interface IProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  extraClass?: string;
}
const SecondaryButton = ({
  disabled,
  extraClass,
  onClick,
  children,
  type,
}: IProps) => {
  return (
    <button
      onClick={onClick}
      disabled={!!disabled}
      className={`focus:outline-none outline-none py-3 rounded appearance-none bg-white hover:bg-grey40 disabled:bg-grey-20  dark:bg-darkContrastFour dark:hover:bg-lightDarkContrast text-black ${extraClass && extraClass}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
