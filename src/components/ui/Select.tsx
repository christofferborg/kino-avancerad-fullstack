import { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <div className="relative w-fit">
      <select
        {...props}
        className={`
        bg-[var(--color-card)]
        text-[var(--color-main)]
        px-4        
        py-3
        font-semibold
        text-base
        rounded-xl
        min-w-[192px]
        h-auto
        appearance-none
        border
        border-[var(--color-muted)]
          ${className}
        `}
      >
        {children}
      </select>

      {/* New arrow*/}
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        <svg
          className="w-6 h-12 text-[var(--color-main)]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}