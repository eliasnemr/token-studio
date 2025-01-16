import { MouseEventHandler, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    type: 'button' | 'submit' | 'reset' | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    extraClass?: string;
}
const PrimaryButton = ({ disabled, extraClass, onClick, children, type }: IProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick ? onClick : () => null}
            className={`bg-lightOrange disabled:opacity-50 hover:bg-lightestOrange rounded-none text-black py-3 appearance-none ${extraClass && extraClass}`}
            type={type}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
