export default function ToggleButton({
  value,
  iconOff,
  iconOn,
  className,
  ...props
}) {
  return (
    <button {...props} className={`toggle-button icon ${className ?? ""}`}>
      <div className={value ? "off" : "on"}>{iconOff}</div>
      <div className={value ? "on" : "off"}>{iconOn}</div>
    </button>
  );
}
