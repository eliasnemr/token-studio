const CodeIcon = ({ fill, size = 22 }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white dark:fill-[#1B1B1B]"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 16v-8l3 8v-8" />
  <path d="M15 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
  <path d="M1 8h3v6.5a1.5 1.5 0 0 1 -3 0v-.5" />
  <path d="M7 15a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1" />
    </svg>
);

export default CodeIcon;
