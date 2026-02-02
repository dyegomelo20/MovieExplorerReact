const CustomButton = ({children, className, style, type, onClick, disabled}) => {
  const mergedStyle = disabled ? { ...style, opacity: 0.7 } : style

  return (
    <button
      className={className}
      style={mergedStyle}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default CustomButton