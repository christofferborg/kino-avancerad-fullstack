export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Sök efter filmer, genrer..."
        className="
          w-full
          bg-[var(--color-card)]
          text-[var(--color-main)]
          px-4
          py-3
          font-regular
          text-base
          rounded-xl
          border
          border-[var(--color-muted)]
          min-w-101
        "
      />

      {/* Search icon */}
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        <svg
          className="w-6 h-6 text-[var(--color-main)]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 2a8 8 0 015.292 13.707l4.707 4.707a1 1 0 01-1.414 1.414l-4.707-4.707A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
        </svg>
      </div>
    </div>
  );
}