const ReceiveIcon = ({  size = 22 }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white dark:fill-[#1B1B1B]"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18.602 12.003a6.66 6.66 0 0 0 -.538 -1.126l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.159 7.159 0 0 0 4.972 1.564" />
        <path d="M19 16v6" />
        <path d="M22 19l-3 3l-3 -3" />
    </svg>
);

export default ReceiveIcon;
