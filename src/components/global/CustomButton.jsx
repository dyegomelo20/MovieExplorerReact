const CustomButton = ({children, className, style, type, onClick, disabled}) => {



  return <button className={className} style={style} type={type} onClick={onClick} disabled={disabled} >{children}</button>
}

export default CustomButton