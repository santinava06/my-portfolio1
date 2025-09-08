interface JavaScriptIconProps {
  className?: string;
  size?: number;
}

export default function JavaScriptIcon({ className = "", size = 24 }: JavaScriptIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
      <path
        d="M6.5 2h11a.5.5 0 0 1 .5.5v19a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5zM8 4v16h8V4H8zm1.5 1.5h5v1h-5v-1zm0 2.5h5v1h-5V8zm0 2.5h5v1h-5v-1zm0 2.5h5v1h-5v-1zm0 2.5h5v1h-5v-1z"
        fill="#000"
      />
    </svg>
  );
}
