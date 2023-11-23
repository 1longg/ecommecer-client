export function LogoVercel({
  className,
  style,
  fill = "none",
}: {
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
}) {
  return (
    <svg
      fill={fill}
      width="20px"
      height="20px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path fillRule="evenodd" d="M256,48,496,464H16Z" />
    </svg>
  );
}
