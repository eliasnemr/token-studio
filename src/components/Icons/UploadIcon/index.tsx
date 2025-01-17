const UploadIcon = ({ size }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="46"
      height="46"
      rx="23"
      stroke="#FF8630"
      strokeWidth="2"
    />
    <mask
      id="mask0_6494_17588"
      maskUnits="userSpaceOnUse"
      x="12"
      y="12"
      width="24"
      height="24"
    >
      <rect x="12" y="12" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_6494_17588)">
      <path
        d="M23 28V19.85L20.4 22.45L19 21L24 16L29 21L27.6 22.45L25 19.85V28H23ZM18 32C17.45 32 16.9792 31.8042 16.5875 31.4125C16.1958 31.0208 16 30.55 16 30V27H18V30H30V27H32V30C32 30.55 31.8042 31.0208 31.4125 31.4125C31.0208 31.8042 30.55 32 30 32H18Z"
        fill="#FF8630"
      />
    </g>
  </svg>
);

export default UploadIcon;
