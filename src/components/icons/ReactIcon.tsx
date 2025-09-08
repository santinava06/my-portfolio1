interface ReactIconProps {
  className?: string;
  size?: number;
}

export default function ReactIcon({ className = "", size = 24 }: ReactIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <path
        d="M12 1C8.5 1 5.73 2.11 3.97 3.97C2.11 5.73 1 8.5 1 12C1 15.5 2.11 18.27 3.97 20.03C5.73 21.89 8.5 23 12 23C15.5 23 18.27 21.89 20.03 20.03C21.89 18.27 23 15.5 23 12C23 8.5 21.89 5.73 20.03 3.97C18.27 2.11 15.5 1 12 1Z"
        stroke="#61DAFB"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        stroke="#61DAFB"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        stroke="#61DAFB"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(-60 12 12)"
      />
    </svg>
  );
}
