type Props = {
  children?: React.ReactNode;
  color?: string;
  className?: string;
};

export default function Badge({ children, color = "red", className }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-x-1.5 rounded-xl px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-200 ${className}`}
    >
      <svg className={`h-1.5 w-1.5`} viewBox="0 0 6 6" aria-hidden="true">
        <circle cx={3} cy={3} r={3} fill={color} />
      </svg>
      {children}
    </span>
  );
}
