

export default function Input({className, value, placeholder, type ="text", onChange}){
    return(
        <input 
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`
            border-1
            border-primary
            !rounded-2xl
            p-3
            text-inputSize
            focus:border-primaryChange
            focus:outline-none
            focus:bg-primaryHoverFocus
            bg-
            ${className}
        `}
        />
    )
}
