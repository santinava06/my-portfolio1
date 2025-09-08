interface VercelIconProps {
  className?: string;
  size?: number;
}

export default function VercelIcon({ className = "", size = 24 }: VercelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 22.525H0l12-21.05 12 21.05z"
        fill="currentColor"
      />
    </svg>
  );
}
